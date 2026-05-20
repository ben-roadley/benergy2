from datetime import date

from django.contrib.auth.models import User
from rest_framework import serializers

from users.models import VALID_EQUIPMENT, VALID_GOALS, UserProfile


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ["url", "username", "email", "is_staff"]


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        exclude = ["user"]

    def validate_date_of_birth(self, value):
        """Ensure date of birth is in the past."""
        if value is None:
            return value
        if value >= date.today():
            raise serializers.ValidationError("Date of birth must be in the past.")
        return value

    def validate_goals(self, value):
        """Ensure goals is a list of valid goal strings."""
        if not isinstance(value, list):
            raise serializers.ValidationError("Goals must be a list.")
        for v in value:
            if v not in VALID_GOALS:
                raise serializers.ValidationError(
                    f"Invalid goal: '{v}'. Must be one of: {VALID_GOALS}"
                )
        return value

    def validate_equipment(self, value):
        """Ensure equipment is a list of valid equipment strings."""
        if not isinstance(value, list):
            raise serializers.ValidationError("Equipment must be a list.")
        for v in value:
            if v not in VALID_EQUIPMENT:
                raise serializers.ValidationError(
                    f"Invalid equipment: '{v}'. Must be one of: {VALID_EQUIPMENT}"
                )
        return value
