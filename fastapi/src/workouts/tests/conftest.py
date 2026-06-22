import pytest
from sqlalchemy import create_engine, event, text
from sqlmodel import SQLModel, Session
from fastapi.testclient import TestClient

from src.main import app
from src.database import SQL_DATABASE_URL
from src.dependencies import get_session
from src.workouts import (
    models,
)  # Ensure models are imported to register with SQLModel.metadata

POSTGRES_USER = "hello_django"
POSTGRES_PASSWORD = "hello_django"
POSTGRES_HOST = "db"
POSTGRES_DB = "myapp_test"

# URL for the test database
TEST_DATABASE_URL = (
    f"postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}/{POSTGRES_DB}"
)

# URL for the default database (needed to create/drop the test DB)
DEFAULT_POSTGRES_URL = SQL_DATABASE_URL


@pytest.fixture(scope="session")
def test_engine():
    # 1. Use the default database to create the test database
    default_engine = create_engine(DEFAULT_POSTGRES_URL, isolation_level="AUTOCOMMIT")
    try:
        with default_engine.connect() as conn:
            conn.execute(text(f"DROP DATABASE IF EXISTS {POSTGRES_DB}"))
            conn.execute(text(f"CREATE DATABASE {POSTGRES_DB}"))
    except Exception as e:
        # Ensure we close the engine even if creation fails
        default_engine.dispose()
        raise e
    finally:
        default_engine.dispose()

    # 2. Create an engine for the test database and create tables
    engine = create_engine(TEST_DATABASE_URL)
    SQLModel.metadata.create_all(engine)

    yield engine

    # 3. Teardown: CRITICAL STEP
    # Dispose of the engine FIRST to close all connections to myapp_test
    engine.dispose()
    default_engine = create_engine(DEFAULT_POSTGRES_URL, isolation_level="AUTOCOMMIT")
    try:
        with default_engine.connect() as conn:
            conn.execute(text(f"DROP DATABASE IF EXISTS {POSTGRES_DB}"))
    finally:
        default_engine.dispose()


@pytest.fixture(scope="function")
def session(test_engine):
    """
    Creates a session with a nested transaction for each test.
    Rolls back changes after every test function to ensure isolation.
    """
    connection = test_engine.connect()
    transaction = connection.begin()
    test_session = Session(bind=connection)

    # Start nested transaction (SAVEPOINT)
    nested = connection.begin_nested()

    # Handle commits inside the test by restarting the nested transaction
    @event.listens_for(test_session, "after_transaction_end")
    def end_savepoint(session, transaction):
        nonlocal nested
        if not nested.is_active:
            nested = connection.begin_nested()

    yield test_session

    # Cleanup: Rollback everything
    test_session.close()
    transaction.rollback()
    connection.close()


@pytest.fixture(scope="function")
def client(session):
    """
    Overrides the FastAPI dependency to use the test session.
    """

    def override_get_session():
        yield session

    app.dependency_overrides[get_session] = override_get_session

    with TestClient(app) as test_client:
        yield test_client

    del app.dependency_overrides[get_session]
