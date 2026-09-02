"""
Route-testing strategy:

- Service tests cover detailed business rules, data transformations, and edge cases.
- Route tests cover one happy path per endpoint, authentication and authorization
  boundaries, request validation, HTTP status codes, and response serialization.
- Playwright covers a small number of complete user journeys through the frontend.

Currently covered routes:
- POST /token/
- GET /session/
- GET /users/me/
- GET /profile/
- GET /profile/options/
- GET /exercise-definitions/
- GET /workouts/
- GET /workouts/{workout_id}/

The route-registration test also verifies the expected route groups are mounted,
and protected-route coverage verifies unauthenticated access is rejected.

Currently not covered:
- POST /profile/clear/
- PATCH /profile/
- POST /workouts/ success and service-error paths
- GET /workouts/last-session/
- GET /workouts/{workout_id}/insights/volume/
- GET /workouts/{workout_id}/logs/
- PUT /workouts/{workout_id}/
- PATCH /workouts/{workout_id}/
- GET /workouts/{workout_id}/warmup-suggestions/
- POST /workouts/{workout_id}/warmup-suggestions/
- POST /workouts/results/

Priority for future route coverage:
- POST/PATCH /profile/: verify mutation payloads, serialization, and ownership.
- Workout creation, update, and deletion-equivalent flows: protect the main
  user-owned workout lifecycle and authorization boundaries.
- Workout logs/results: protect persisted training data from cross-user access or
  writes.
- Insights: verify route-level ownership checks and response serialization.
- Warm-up suggestions: verify successful responses and external-service failures.
- Explicit 404, 400, 403, and 503 branches: ensure HTTP error contracts remain
  stable for the frontend.

The route suite should not duplicate every service test. Its purpose is to verify
the HTTP contract and dependency wiring between the frontend-facing API and the
service layer.
"""

from types import SimpleNamespace
from unittest.mock import Mock

import pytest
from fastapi.testclient import TestClient

from src.auth import router as auth_router
from src.auth.services import get_current_active_user
from src.dependencies import get_session
from src.main import app
from src.users.schemas import User
from src.workouts import router as workouts_router


@pytest.fixture
def client():
    session = Mock()
    user = User(id=7, username="route-user", email="route@example.com", is_active=True)

    app.dependency_overrides[get_session] = lambda: session
    app.dependency_overrides[get_current_active_user] = lambda: user
    test_client = TestClient(app)
    yield test_client, session, user
    app.dependency_overrides.clear()


def test_all_expected_routers_are_registered():
    paths = {route.path for route in app.routes}

    assert {
        "/token/",
        "/session/",
        "/users/me/",
        "/profile/",
        "/workouts/",
        "/exercise-definitions/",
    } <= paths


def test_protected_route_rejects_missing_credentials():
    app.dependency_overrides.clear()

    response = TestClient(app).get("/users/me/")

    assert response.status_code == 401
    assert response.json() == {"detail": "Not authenticated"}


def test_users_me_uses_dependency_override_and_serializes_response(client):
    test_client, _, _ = client

    response = test_client.get("/users/me/")

    assert response.status_code == 200
    assert response.json() == {
        "id": 7,
        "username": "route-user",
        "email": "route@example.com",
        "is_active": True,
    }


def test_token_route_returns_bearer_token(monkeypatch):
    authenticated_user = SimpleNamespace(username="route-user")
    monkeypatch.setattr(
        auth_router, "authenticate_user", lambda *args: authenticated_user
    )
    monkeypatch.setattr(
        auth_router, "create_access_token", lambda **kwargs: "signed-token"
    )

    response = TestClient(app).post(
        "/token/", data={"username": "route-user", "password": "secret"}
    )

    assert response.status_code == 200
    assert response.json() == {"access_token": "signed-token", "token_type": "bearer"}


def test_token_route_returns_401_for_invalid_credentials(monkeypatch):
    monkeypatch.setattr(auth_router, "authenticate_user", lambda *args: False)

    response = TestClient(app).post(
        "/token/", data={"username": "route-user", "password": "wrong"}
    )

    assert response.status_code == 401
    assert response.headers["www-authenticate"] == "Bearer"
    assert response.json() == {"detail": "Incorrect username or password"}


def test_session_route_returns_authenticated_state(monkeypatch):
    async def check_token(token, session):
        return {"isAuthenticated": True, "user": {"id": 7}}

    monkeypatch.setattr(
        auth_router,
        "check_token",
        check_token,
    )

    response = TestClient(app).get(
        "/session/", headers={"Authorization": "Bearer signed-token"}
    )

    assert response.status_code == 200
    assert response.json() == {"isAuthenticated": True, "user": {"id": 7}}


def test_profile_route_serializes_protected_response(client, monkeypatch):
    test_client, session, _ = client
    profile = {
        "id": 4,
        "display_name": "Route User",
        "date_of_birth": None,
        "sex": "",
        "weight_kg": None,
        "height_cm": None,
        "fitness_level": "",
        "goals": [],
        "equipment": [],
        "session_duration": "",
        "training_days_per_week": None,
        "injury_history": "",
        "lifestyle_description": "",
        "sleep_quality": "",
        "stress_level": "",
    }
    monkeypatch.setattr(
        "src.users.router.get_or_create_profile", lambda user_id, session: profile
    )

    response = test_client.get("/profile/")

    assert response.status_code == 200
    assert response.json() == profile


def test_profile_options_returns_serialized_service_result(client, monkeypatch):
    test_client, _, _ = client
    options = {
        "goals": ["strength_gain"],
        "equipment": ["dumbbells"],
        "sex": ["male"],
        "fitness_level": ["beginner"],
        "session_duration": ["30_45"],
        "sleep_quality": ["good"],
        "stress_level": ["low"],
    }
    monkeypatch.setattr("src.users.router.get_profile_options", lambda: options)

    response = test_client.get("/profile/options/")

    assert response.status_code == 200
    assert response.json() == options


def test_catalog_rejects_short_query_at_route_boundary(client):
    test_client, _, _ = client

    response = test_client.get("/exercise-definitions/?q=x")

    assert response.status_code == 400
    assert (
        response.json()["detail"]
        == "Query parameter 'q' must be at least 2 characters long."
    )


def test_catalog_route_serializes_service_results(client, monkeypatch):
    test_client, session, _ = client
    result = SimpleNamespace(
        slug="push-up",
        name="Push-Up",
        category="Chest",
        equipment="Bodyweight",
        primary_muscles=["chest"],
        level="Beginner",
    )
    search = Mock(return_value=[result])
    monkeypatch.setattr("src.catalog.router.search_exercise_definitions", search)

    response = test_client.get("/exercise-definitions/?q=push")

    assert response.status_code == 200
    assert response.json() == [
        {
            "slug": "push-up",
            "name": "Push-Up",
            "category": "Chest",
            "equipment": "Bodyweight",
            "primary_muscles": ["chest"],
            "level": "Beginner",
        }
    ]
    search.assert_called_once_with("push", session)


def test_workouts_route_passes_authenticated_user_to_service(client, monkeypatch):
    test_client, session, user = client
    workout = SimpleNamespace(
        id=3,
        name="Full Body",
        description="Three movements",
        user=user,
        is_stagnating=False,
        is_editable=True,
    )
    get_workouts = Mock(return_value=[workout])
    monkeypatch.setattr(workouts_router, "get_workouts", get_workouts)

    response = test_client.get("/workouts/")

    assert response.status_code == 200
    assert response.json()[0]["id"] == 3
    get_workouts.assert_called_once_with(user_id=7, session=session)


def test_workout_detail_returns_404_for_workout_outside_user_boundary(
    client, monkeypatch
):
    test_client, session, _ = client
    get_workout = Mock(return_value=None)
    monkeypatch.setattr(workouts_router, "get_workout", get_workout)

    response = test_client.get("/workouts/999/")

    assert response.status_code == 404
    assert response.json() == {"detail": "Workout not found."}
    get_workout.assert_called_once_with(user_id=7, workout_id=999, session=session)


def test_create_workout_rejects_invalid_payload_before_service(client, monkeypatch):
    test_client, _, _ = client
    create_workout = Mock()
    monkeypatch.setattr(
        workouts_router, "create_workout_with_exercises", create_workout
    )

    response = test_client.post("/workouts/", json={"name": "Missing exercises"})

    assert response.status_code == 422
    create_workout.assert_not_called()
