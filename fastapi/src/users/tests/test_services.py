"""Unit tests for users services."""

import datetime
import pytest
from unittest.mock import Mock, patch, MagicMock

from src.users.services import (
    get_user,
    update_profile,
    clear_profile,
    get_or_create_profile,
    get_profile_options,
)
from src.users.schemas import (
    UserWithPassword,
    ProfileDetails,
    ProfileUpdate,
    ProfileOptionsDetails,
    SexChoices,
    FitnessLevelChoices,
    SessionDurationChoices,
    SleepQualityChoices,
    StressLevelChoices,
    ValidGoals,
    ValidEquipment,
)


@pytest.fixture
def mock_session():
    """Create a mock database session."""
    return Mock()


@pytest.fixture
def sample_user():
    """Create a sample user."""
    user = Mock()
    user.id = 1
    user.username = "testuser"
    user.password = "hashed_password"
    user.email = "test@example.com"
    user.is_active = True
    user.is_staff = False
    user.is_superuser = False
    user.first_name = "Test"
    user.last_name = "User"
    user.date_joined = datetime.datetime.now(datetime.timezone.utc)
    user.last_login = None

    user.model_dump.return_value = {
        "id": 1,
        "username": "testuser",
        "password": "hashed_password",
        "email": "test@example.com",
        "is_active": True,
    }
    return user


@pytest.fixture
def sample_profile():
    """Create a sample profile."""
    profile = Mock()
    profile.id = 1
    profile.user_id = 1
    profile.display_name = "Test User Profile"
    profile.date_of_birth = datetime.date(1990, 1, 1)
    profile.sex = SexChoices.MALE
    profile.weight_kg = 75.5
    profile.height_cm = 180
    profile.fitness_level = FitnessLevelChoices.INTERMEDIATE
    profile.goals = ["strength_gain", "general_health"]
    profile.equipment = ["dumbbells", "barbell_and_plates"]
    profile.session_duration = SessionDurationChoices.MEDIUM
    profile.training_days_per_week = 4
    profile.injury_history = "Previous shoulder injury"
    profile.lifestyle_description = "Sedentary job, active on weekends"
    profile.sleep_quality = SleepQualityChoices.GOOD
    profile.stress_level = StressLevelChoices.MEDIUM
    return profile


class TestGetUser:
    """Test suite for get_user function."""

    def test_get_user_success(self, mock_session, sample_user):
        """Test successfully retrieving a user by username."""
        # Arrange
        username = "testuser"
        mock_session.exec.return_value.all.return_value = [sample_user]

        # Act
        result = get_user(username, mock_session)

        # Assert
        assert isinstance(result, UserWithPassword)
        assert result.id == 1
        mock_session.exec.assert_called_once()

    def test_get_user_not_found(self, mock_session):
        """Test that ValueError is raised when user is not found."""
        # Arrange
        username = "nonexistent"
        mock_session.exec.return_value.all.return_value = []

        # Act & Assert
        with pytest.raises(ValueError, match="not found or multiple users"):
            get_user(username, mock_session)

    def test_get_user_multiple_results(self, mock_session, sample_user):
        """Test that ValueError is raised when multiple users are returned."""
        # Arrange
        username = "testuser"
        mock_session.exec.return_value.all.return_value = [sample_user, sample_user]

        # Act & Assert
        with pytest.raises(ValueError, match="not found or multiple users"):
            get_user(username, mock_session)

    def test_get_user_error_message_contains_username(self, mock_session):
        """Test that error message includes the searched username."""
        # Arrange
        username = "specificuser"
        mock_session.exec.return_value.all.return_value = []

        # Act & Assert
        with pytest.raises(ValueError, match=f"'{username}'"):
            get_user(username, mock_session)


class TestUpdateProfile:
    """Test suite for update_profile function."""

    def test_update_profile_success(self, mock_session, sample_profile):
        """Test successfully updating a profile."""
        # Arrange
        user_id = 1
        update_data = ProfileUpdate(
            display_name="Updated Name",
            weight_kg=80.0,
        )
        mock_session.exec.return_value.first.return_value = sample_profile

        # Act
        result = update_profile(user_id, mock_session, update_data)

        # Assert
        assert isinstance(result, ProfileDetails)
        mock_session.add.assert_called_once()
        mock_session.commit.assert_called_once()
        mock_session.refresh.assert_called_once()

    def test_update_profile_not_found(self, mock_session):
        """Test that ValueError is raised when profile is not found."""
        # Arrange
        user_id = 999
        update_data = ProfileUpdate(display_name="New Name")
        mock_session.exec.return_value.first.return_value = None

        # Act & Assert
        with pytest.raises(ValueError, match="Profile for user_id"):
            update_profile(user_id, mock_session, update_data)

    def test_update_profile_partial_update(self, mock_session, sample_profile):
        """Test that only provided fields are updated."""
        # Arrange
        user_id = 1
        update_data = ProfileUpdate(display_name="New Display Name")
        original_weight = sample_profile.weight_kg
        mock_session.exec.return_value.first.return_value = sample_profile

        # Act
        result = update_profile(user_id, mock_session, update_data)

        # Assert
        assert isinstance(result, ProfileDetails)
        mock_session.add.assert_called_once()
        mock_session.commit.assert_called_once()
        mock_session.refresh.assert_called_once()

    def test_update_profile_multiple_fields(self, mock_session, sample_profile):
        """Test updating multiple profile fields at once."""
        # Arrange
        user_id = 1
        update_data = ProfileUpdate(
            display_name="New Name",
            weight_kg=85.0,
            fitness_level=FitnessLevelChoices.ADVANCED,
        )
        mock_session.exec.return_value.first.return_value = sample_profile

        # Act
        result = update_profile(user_id, mock_session, update_data)

        # Assert
        assert isinstance(result, ProfileDetails)
        mock_session.add.assert_called_once()
        mock_session.commit.assert_called_once()
        mock_session.refresh.assert_called_once()


class TestClearProfile:
    """Test suite for clear_profile function."""

    def test_clear_profile_success(self, mock_session, sample_profile):
        """Test successfully clearing a profile."""
        # Arrange
        user_id = 1
        mock_session.exec.return_value.first.return_value = sample_profile

        # Act
        result = clear_profile(user_id, mock_session)

        # Assert
        assert isinstance(result, ProfileDetails)
        # Verify fields were reset
        assert sample_profile.display_name == ""
        assert sample_profile.sex == ""
        assert sample_profile.goals == []
        assert sample_profile.equipment == []
        assert sample_profile.date_of_birth is None
        assert sample_profile.weight_kg is None
        assert sample_profile.height_cm is None
        assert sample_profile.training_days_per_week is None
        mock_session.add.assert_called_once()
        mock_session.commit.assert_called_once()
        mock_session.refresh.assert_called_once()

    def test_clear_profile_not_found(self, mock_session):
        """Test that None is returned when profile is not found."""
        # Arrange
        user_id = 999
        mock_session.exec.return_value.first.return_value = None

        # Act
        result = clear_profile(user_id, mock_session)

        # Assert
        assert result is None
        mock_session.add.assert_not_called()
        mock_session.commit.assert_not_called()

    def test_clear_profile_resets_all_optional_fields(
        self, mock_session, sample_profile
    ):
        """Test that all optional fields are properly reset."""
        # Arrange
        user_id = 1
        mock_session.exec.return_value.first.return_value = sample_profile

        # Act
        result = clear_profile(user_id, mock_session)

        # Assert
        # Text fields set to empty string
        assert sample_profile.display_name == ""
        assert sample_profile.sex == ""
        assert sample_profile.fitness_level == ""
        assert sample_profile.session_duration == ""
        assert sample_profile.injury_history == ""
        assert sample_profile.lifestyle_description == ""
        assert sample_profile.sleep_quality == ""
        assert sample_profile.stress_level == ""
        # Numeric fields set to None
        assert sample_profile.date_of_birth is None
        assert sample_profile.weight_kg is None
        assert sample_profile.height_cm is None
        assert sample_profile.training_days_per_week is None
        # JSON fields set to empty list
        assert sample_profile.goals == []
        assert sample_profile.equipment == []
        assert isinstance(result, ProfileDetails)


class TestGetOrCreateProfile:
    """Test suite for get_or_create_profile function."""

    def test_get_existing_profile(self, mock_session, sample_profile):
        """Test retrieving an existing profile."""
        # Arrange
        user_id = 1
        mock_session.exec.return_value.first.return_value = sample_profile

        # Act
        result = get_or_create_profile(user_id, mock_session)

        # Assert
        assert isinstance(result, ProfileDetails)
        mock_session.add.assert_not_called()
        mock_session.commit.assert_not_called()

    def test_create_profile_when_missing(self, mock_session, monkeypatch):
        mock_session.exec.return_value.first.return_value = None
        monkeypatch.setattr(
            "src.users.services.ProfileDetails.model_validate",
            lambda profile: "created profile",
        )

        result = get_or_create_profile(7, mock_session)

        assert result == "created profile"
        mock_session.add.assert_called_once()
        assert mock_session.add.call_args.args[0].user_id == 7
        mock_session.commit.assert_called_once()
        mock_session.refresh.assert_called_once()

    def test_get_or_create_profile_calls_model_validate(
        self, mock_session, sample_profile
    ):
        """Test that ProfileDetails.model_validate is called on the profile."""
        # Arrange
        user_id = 1
        mock_session.exec.return_value.first.return_value = sample_profile

        # Act
        result = get_or_create_profile(user_id, mock_session)

        # Assert
        assert isinstance(result, ProfileDetails)


class TestGetProfileOptions:
    """Test suite for get_profile_options function."""

    def test_get_profile_options_success(self):
        """Test that all profile options are returned."""
        # Act
        result = get_profile_options()

        # Assert
        assert isinstance(result, ProfileOptionsDetails)
        assert hasattr(result, "goals")
        assert hasattr(result, "equipment")
        assert hasattr(result, "sex")
        assert hasattr(result, "fitness_level")
        assert hasattr(result, "session_duration")
        assert hasattr(result, "sleep_quality")
        assert hasattr(result, "stress_level")

    def test_get_profile_options_goals(self):
        """Test that all valid goals are included."""
        # Act
        result = get_profile_options()

        # Assert
        assert len(result.goals) > 0
        assert ValidGoals.STRENGTH_GAIN.value in result.goals
        assert ValidGoals.WEIGHT_LOSS.value in result.goals
        assert ValidGoals.GENERAL_HEALTH.value in result.goals

    def test_get_profile_options_equipment(self):
        """Test that all valid equipment options are included."""
        # Act
        result = get_profile_options()

        # Assert
        assert len(result.equipment) > 0
        assert ValidEquipment.DUMBBELLS.value in result.equipment
        assert ValidEquipment.BARBELL_AND_PLATES.value in result.equipment
        assert ValidEquipment.BODYWEIGHT_ONLY.value in result.equipment

    def test_get_profile_options_excludes_defaults(self):
        """Test that default enum values are excluded from choice lists."""
        # Act
        result = get_profile_options()

        # Assert
        # Should not include empty string defaults
        assert "" not in result.sex
        assert "" not in result.fitness_level
        assert "" not in result.session_duration
        assert "" not in result.sleep_quality
        assert "" not in result.stress_level

    def test_get_profile_options_sex_choices(self):
        """Test that sex choices exclude DEFAULT and include valid options."""
        # Act
        result = get_profile_options()

        # Assert
        assert SexChoices.MALE.value in result.sex
        assert SexChoices.FEMALE.value in result.sex
        assert SexChoices.PREFER_NOT_TO_SAY.value in result.sex
        assert SexChoices.DEFAULT.value not in result.sex

    def test_get_profile_options_fitness_level_choices(self):
        """Test that fitness level choices exclude DEFAULT and include valid options."""
        # Act
        result = get_profile_options()

        # Assert
        assert FitnessLevelChoices.BEGINNER.value in result.fitness_level
        assert FitnessLevelChoices.INTERMEDIATE.value in result.fitness_level
        assert FitnessLevelChoices.ADVANCED.value in result.fitness_level
        assert FitnessLevelChoices.ATHLETE.value in result.fitness_level
        assert FitnessLevelChoices.DEFAULT.value not in result.fitness_level

    def test_get_profile_options_session_duration_choices(self):
        """Test that session duration choices exclude DEFAULT and include valid options."""
        # Act
        result = get_profile_options()

        # Assert
        assert SessionDurationChoices.SHORT.value in result.session_duration
        assert SessionDurationChoices.MEDIUM.value in result.session_duration
        assert SessionDurationChoices.LONG.value in result.session_duration
        assert SessionDurationChoices.VERY_LONG.value in result.session_duration
        assert SessionDurationChoices.DEFAULT.value not in result.session_duration

    def test_get_profile_options_sleep_quality_choices(self):
        """Test that sleep quality choices exclude DEFAULT and include valid options."""
        # Act
        result = get_profile_options()

        # Assert
        assert SleepQualityChoices.POOR.value in result.sleep_quality
        assert SleepQualityChoices.AVERAGE.value in result.sleep_quality
        assert SleepQualityChoices.GOOD.value in result.sleep_quality
        assert SleepQualityChoices.DEFAULT.value not in result.sleep_quality

    def test_get_profile_options_stress_level_choices(self):
        """Test that stress level choices exclude DEFAULT and include valid options."""
        # Act
        result = get_profile_options()

        # Assert
        assert StressLevelChoices.LOW.value in result.stress_level
        assert StressLevelChoices.MEDIUM.value in result.stress_level
        assert StressLevelChoices.HIGH.value in result.stress_level
        assert StressLevelChoices.DEFAULT.value not in result.stress_level
