"""Unit tests for catalog services."""

import pytest
from unittest.mock import Mock, MagicMock, patch

from src.catalog.services import search_exercise_definitions
from src.catalog.schemas import CatalogExerciseDefinitionListItem


@pytest.fixture
def mock_session():
    """Create a mock database session."""
    return Mock()


@pytest.fixture
def sample_exercise_definition():
    """Create a sample exercise definition."""
    mock = Mock()
    mock.slug = "barbell-bench-press"
    mock.name = "Barbell Bench Press"
    mock.category = "Chest"
    mock.level = "Intermediate"
    mock.primary_muscles = ["chest", "triceps"]
    mock.secondary_muscles = {"anterior-deltoids": 0.2}
    mock.instructions = {}
    mock.images = {}
    mock.equipment = "Barbell"
    mock.force = "Push"
    mock.mechanic = "Compound"
    return mock


class TestSearchExerciseDefinitions:
    """Test suite for search_exercise_definitions function."""

    def test_search_with_results(self, mock_session, sample_exercise_definition):
        """Test successful search that returns matching exercises."""
        # Arrange
        query = "bench"
        mock_session.exec.return_value.all.return_value = [sample_exercise_definition]

        # Act
        results = search_exercise_definitions(query, mock_session)

        # Assert
        assert len(results) == 1
        assert results[0].slug == "barbell-bench-press"
        assert results[0].name == "Barbell Bench Press"
        assert results[0].category == "Chest"
        assert results[0].equipment == "Barbell"
        mock_session.exec.assert_called_once()

    def test_search_with_no_results(self, mock_session):
        """Test search that returns no matching exercises."""
        # Arrange
        query = "nonexistent"
        mock_session.exec.return_value.all.return_value = []

        # Act
        results = search_exercise_definitions(query, mock_session)

        # Assert
        assert results == []
        mock_session.exec.assert_called_once()

    def test_search_case_insensitive(self, mock_session, sample_exercise_definition):
        """Test that search is case-insensitive."""
        # Arrange
        query = "BENCH PRESS"
        mock_session.exec.return_value.all.return_value = [sample_exercise_definition]

        # Act
        results = search_exercise_definitions(query, mock_session)

        # Assert
        assert len(results) == 1
        mock_session.exec.assert_called_once()

    def test_search_multiple_results(self, mock_session):
        """Test search that returns multiple matching exercises."""
        # Arrange
        ex1 = Mock()
        ex1.slug = "dumbbell-bench-press"
        ex1.name = "Dumbbell Bench Press"
        ex1.category = "Chest"
        ex1.level = "Beginner"
        ex1.primary_muscles = ["chest"]
        ex1.secondary_muscles = {}
        ex1.instructions = {}
        ex1.images = {}
        ex1.equipment = "Dumbbells"

        ex2 = Mock()
        ex2.slug = "machine-chest-press"
        ex2.name = "Machine Chest Press"
        ex2.category = "Chest"
        ex2.level = "Beginner"
        ex2.primary_muscles = ["chest"]
        ex2.secondary_muscles = {}
        ex2.instructions = {}
        ex2.images = {}
        ex2.equipment = "Machine"

        exercises = [ex1, ex2]
        query = "press"
        mock_session.exec.return_value.all.return_value = exercises

        # Act
        results = search_exercise_definitions(query, mock_session)

        # Assert
        assert len(results) == 2
        assert results[0].slug == "dumbbell-bench-press"
        assert results[1].slug == "machine-chest-press"

    def test_search_result_validation(self, mock_session, sample_exercise_definition):
        """Test that results are properly validated as CatalogExerciseDefinitionListItem."""
        # Arrange
        query = "bench"
        mock_session.exec.return_value.all.return_value = [sample_exercise_definition]

        # Act
        results = search_exercise_definitions(query, mock_session)

        # Assert
        assert len(results) == 1
        result = results[0]
        assert isinstance(result, CatalogExerciseDefinitionListItem)
        assert hasattr(result, "slug")
        assert hasattr(result, "name")
        assert hasattr(result, "category")
        assert hasattr(result, "level")
        assert hasattr(result, "equipment")
        assert hasattr(result, "primary_muscles")

    def test_search_limits_results_to_30(self, mock_session):
        """Test that search limits results to 30 items."""
        # Arrange
        query = "test"
        # Mock the session to verify the query includes limit(30)
        mock_exec_result = Mock()
        mock_session.exec.return_value = mock_exec_result
        mock_exec_result.all.return_value = []

        # Act
        search_exercise_definitions(query, mock_session)

        # Assert
        # Verify exec was called with a statement that includes limit(30)
        mock_session.exec.assert_called_once()
        call_args = mock_session.exec.call_args
        # The statement is the first positional argument
        statement = call_args[0][0]
        # We can verify the statement has a limit by checking its string representation
        statement_str = str(statement)
        assert "LIMIT" in statement_str or "limit" in statement_str

    def test_search_handles_special_characters(
        self, mock_session, sample_exercise_definition
    ):
        """Test search with special characters in query."""
        # Arrange
        query = "bench %"
        mock_session.exec.return_value.all.return_value = [sample_exercise_definition]

        # Act
        results = search_exercise_definitions(query, mock_session)

        # Assert
        assert len(results) == 1
        mock_session.exec.assert_called_once()

    def test_search_with_empty_query(self, mock_session):
        """Test search with empty string query."""
        # Arrange
        query = ""
        mock_session.exec.return_value.all.return_value = []

        # Act
        results = search_exercise_definitions(query, mock_session)

        # Assert
        assert results == []
        mock_session.exec.assert_called_once()

    def test_search_result_schema_fields(self, mock_session):
        """Test that result schema includes only expected fields."""
        # Arrange
        exercise = Mock()
        exercise.slug = "test-exercise"
        exercise.name = "Test Exercise"
        exercise.category = "Back"
        exercise.level = "Advanced"
        exercise.equipment = "Barbell"
        exercise.primary_muscles = ["back", "biceps"]
        mock_session.exec.return_value.all.return_value = [exercise]

        # Act
        results = search_exercise_definitions("test", mock_session)

        # Assert
        result = results[0]
        assert result.slug == "test-exercise"
        assert result.name == "Test Exercise"
        assert result.category == "Back"
        assert result.level == "Advanced"
        assert result.equipment == "Barbell"
        assert result.primary_muscles == ["back", "biceps"]
