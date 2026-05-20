from django.contrib.auth import authenticate, login, logout
from django.middleware.csrf import get_token
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response


def _user_data(user):
    profile = getattr(user, "profile", None)
    return {
        "id": user.id,
        "username": user.username,
        "email": user.email,
        "display_name": profile.display_name if profile else "",
    }


@api_view(["GET"])
@permission_classes([AllowAny])
def session_view(request):
    """Check if user is authenticated. Also ensures the CSRF cookie is set."""
    get_token(request)
    if request.user.is_authenticated:
        return Response({"isAuthenticated": True, "user": _user_data(request.user)})
    return Response({"isAuthenticated": False})


@api_view(["POST"])
@permission_classes([AllowAny])
def login_view(request):
    """Authenticate user and create a session."""
    username = request.data.get("username")
    password = request.data.get("password")
    if not username or not password:
        return Response(
            {"error": "Username and password are required."},
            status=status.HTTP_400_BAD_REQUEST,
        )
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return Response({"user": _user_data(user)})
    return Response(
        {"error": "Invalid credentials."},
        status=status.HTTP_400_BAD_REQUEST,
    )


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def logout_view(request):
    """Log out user and destroy session."""
    logout(request)
    return Response({"message": "Logged out successfully."})
