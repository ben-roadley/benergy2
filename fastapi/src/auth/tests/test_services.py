import asyncio
from datetime import timedelta
from types import SimpleNamespace

import jwt
import pytest
from fastapi import HTTPException

from src.auth import services
from src.users.schemas import UserWithPassword


def make_user(is_active=True):
    return UserWithPassword(
        id=1,
        username="bruce",
        email="bruce@example.com",
        is_active=is_active,
        password="hashed-password",
    )


def test_verify_password_removes_legacy_django_argon2_prefix(monkeypatch):
    monkeypatch.setattr(services.password_hash, "verify", lambda *args: True)

    assert services.verify_password("secret", "argon2$argon2id$hash") is True


def test_verify_password_accepts_current_hash_without_prefix(monkeypatch):
    monkeypatch.setattr(services.password_hash, "verify", lambda *args: True)

    assert services.verify_password("secret", "$argon2id$hash") is True


def test_get_password_hash_delegates_to_password_hasher(monkeypatch):
    monkeypatch.setattr(
        services.password_hash, "hash", lambda password: f"hash:{password}"
    )

    assert services.get_password_hash("secret") == "hash:secret"


def test_create_access_token_contains_subject_and_expiry(monkeypatch):
    monkeypatch.setattr(services, "SECRET_KEY", "test-secret")

    token = services.create_access_token(
        {"sub": "bruce"}, expires_delta=timedelta(minutes=5)
    )

    payload = jwt.decode(token, "test-secret", algorithms=[services.ALGORITHM])
    assert payload["sub"] == "bruce"
    assert payload["exp"] > payload["iat"] if "iat" in payload else payload["exp"] > 0


def test_create_access_token_uses_default_expiry(monkeypatch):
    monkeypatch.setattr(services, "SECRET_KEY", "test-secret")

    token = services.create_access_token({"sub": "bruce"})

    payload = jwt.decode(token, "test-secret", algorithms=[services.ALGORITHM])
    assert payload["sub"] == "bruce"
    assert payload["exp"] > 0


def test_authenticate_user_uses_dummy_hash_for_unknown_username(monkeypatch):
    verified = []
    monkeypatch.setattr(services, "get_user", lambda username, session: None)
    monkeypatch.setattr(
        services,
        "verify_password",
        lambda password, hashed_password: verified.append((password, hashed_password)),
    )

    assert services.authenticate_user("missing", "secret", object()) is False
    assert verified == [("secret", services.DUMMY_HASH)]


def test_authenticate_user_uses_dummy_hash_when_lookup_raises(monkeypatch):
    verified = []

    def get_user_that_raises(username, session):
        raise ValueError("not found")

    monkeypatch.setattr(services, "get_user", get_user_that_raises)
    monkeypatch.setattr(
        services,
        "verify_password",
        lambda password, hashed_password: verified.append((password, hashed_password)),
    )

    assert services.authenticate_user("missing", "secret", object()) is False
    assert verified == [("secret", services.DUMMY_HASH)]


def test_authenticate_user_returns_user_when_password_is_valid(monkeypatch):
    user = make_user()
    monkeypatch.setattr(services, "get_user", lambda username, session: user)
    monkeypatch.setattr(
        services, "verify_password", lambda password, hashed_password: True
    )

    assert services.authenticate_user("bruce", "secret", object()) == user


def test_authenticate_user_rejects_invalid_password(monkeypatch):
    monkeypatch.setattr(services, "get_user", lambda username, session: make_user())
    monkeypatch.setattr(
        services, "verify_password", lambda password, hashed_password: False
    )

    assert services.authenticate_user("bruce", "incorrect", object()) is False


def test_get_current_user_returns_user_for_valid_token(monkeypatch):
    user = make_user()
    monkeypatch.setattr(services, "SECRET_KEY", "test-secret")
    monkeypatch.setattr(services, "get_user", lambda username, session: user)
    token = jwt.encode({"sub": "bruce"}, "test-secret", algorithm=services.ALGORITHM)

    result = asyncio.run(services.get_current_user(token, object()))

    assert result == user


@pytest.mark.parametrize("payload", [{}, {"sub": None}])
def test_get_current_user_rejects_token_without_subject(monkeypatch, payload):
    monkeypatch.setattr(services, "SECRET_KEY", "test-secret")
    token = jwt.encode(payload, "test-secret", algorithm=services.ALGORITHM)

    with pytest.raises(HTTPException) as exception:
        asyncio.run(services.get_current_user(token, object()))

    assert exception.value.status_code == 401


def test_get_current_user_rejects_invalid_token(monkeypatch):
    monkeypatch.setattr(services, "SECRET_KEY", "test-secret")

    with pytest.raises(HTTPException) as exception:
        asyncio.run(services.get_current_user("invalid", object()))

    assert exception.value.status_code == 401


def test_get_current_user_rejects_unknown_user(monkeypatch):
    monkeypatch.setattr(services, "SECRET_KEY", "test-secret")

    def get_user_that_raises(username, session):
        raise ValueError("not found")

    monkeypatch.setattr(services, "get_user", get_user_that_raises)
    token = jwt.encode({"sub": "missing"}, "test-secret", algorithm=services.ALGORITHM)

    with pytest.raises(HTTPException) as exception:
        asyncio.run(services.get_current_user(token, object()))

    assert exception.value.status_code == 401


def test_get_current_active_user_rejects_inactive_user():
    with pytest.raises(HTTPException) as exception:
        asyncio.run(services.get_current_active_user(make_user(is_active=False)))

    assert exception.value.status_code == 400


def test_get_current_active_user_returns_active_user():
    user = make_user()

    assert asyncio.run(services.get_current_active_user(user)) == user


def test_check_token_returns_authentication_state(monkeypatch):
    user = make_user()

    async def get_current_user(token, session):
        return user

    monkeypatch.setattr(services, "get_current_user", get_current_user)

    result = asyncio.run(services.check_token("token", object()))

    assert result["isAuthenticated"] is True
    assert result["user"].username == "bruce"


def test_check_token_returns_unauthenticated_when_validation_fails(monkeypatch):
    async def get_current_user(token, session):
        raise HTTPException(status_code=401)

    monkeypatch.setattr(services, "get_current_user", get_current_user)

    assert asyncio.run(services.check_token("token", object())) == {
        "isAuthenticated": False
    }


def test_check_token_propagates_unexpected_errors(monkeypatch):
    async def get_current_user(token, session):
        raise RuntimeError("database unavailable")

    monkeypatch.setattr(services, "get_current_user", get_current_user)

    with pytest.raises(RuntimeError, match="database unavailable"):
        asyncio.run(services.check_token("token", object()))
