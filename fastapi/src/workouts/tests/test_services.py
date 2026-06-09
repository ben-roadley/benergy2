import os
from types import SimpleNamespace

import pytest

os.environ.setdefault("SQL_USER", "test")
os.environ.setdefault("SQL_PASSWORD", "test")
os.environ.setdefault("SQL_HOST", "localhost")
os.environ.setdefault("SQL_PORT", "5432")
os.environ.setdefault("SQL_DATABASE", "test")

from src.workouts import services


class FakeResult:
    def __init__(self, rows):
        self._rows = rows

    def all(self):
        return self._rows


class FakeSession:
    def __init__(self, result_sets):
        self._result_sets = list(result_sets)
        self.statements = []

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        return False

    def exec(self, statement):
        self.statements.append(statement)
        return FakeResult(self._result_sets.pop(0))


@pytest.fixture
def workout():
    return SimpleNamespace(id=1, user=SimpleNamespace(id=10))


@pytest.fixture
def fake_log():
    return SimpleNamespace(id=100)


def _entry(exercise_order, set_order, actual_reps, weight=None):
    exercise = SimpleNamespace(order=exercise_order)
    set_of_reps = SimpleNamespace(order=set_order, exercise=exercise)
    return SimpleNamespace(
        set_of_reps=set_of_reps,
        nb_reps_actual=actual_reps,
        weight_actual=weight,
    )


class TestIsWorkoutStagnating:
    def test_returns_false_with_fewer_than_three_logs(self, monkeypatch, workout):
        fake_session = FakeSession([[SimpleNamespace(id=3), SimpleNamespace(id=2)]])
        monkeypatch.setattr(services, "Session", lambda *args, **kwargs: fake_session)

        assert services.is_workout_stagnating(workout=workout) is False
        assert len(fake_session.statements) == 1

    def test_returns_true_when_last_three_logs_match(self, monkeypatch, workout, fake_log):
        logs = [SimpleNamespace(id=3), SimpleNamespace(id=2), fake_log]
        entries = [
            [
                _entry(1, 1, 10),
                _entry(1, 2, 8),
                _entry(2, 1, 12),
            ],
            [
                _entry(1, 1, 10),
                _entry(1, 2, 8),
                _entry(2, 1, 12),
            ],
            [
                _entry(1, 1, 10),
                _entry(1, 2, 8),
                _entry(2, 1, 12),
            ],
        ]
        fake_session = FakeSession([logs, *entries])
        monkeypatch.setattr(services, "Session", lambda *args, **kwargs: fake_session)

        assert services.is_workout_stagnating(workout=workout) is True
        assert len(fake_session.statements) == 4

    def test_returns_false_when_recent_logs_differ(self, monkeypatch, workout):
        logs = [SimpleNamespace(id=3), SimpleNamespace(id=2), SimpleNamespace(id=1)]
        entries = [
            [
                _entry(1, 1, 10),
                _entry(1, 2, 8),
                _entry(2, 1, 12),
            ],
            [
                _entry(1, 1, 10),
                _entry(1, 2, 8),
                _entry(2, 1, 12),
            ],
            [
                _entry(1, 1, 10),
                _entry(1, 2, 9),
                _entry(2, 1, 12),
            ],
        ]
        fake_session = FakeSession([logs, *entries])
        monkeypatch.setattr(services, "Session", lambda *args, **kwargs: fake_session)

        assert services.is_workout_stagnating(workout=workout) is False
        assert len(fake_session.statements) == 4
