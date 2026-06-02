from django.contrib import admin
from django.urls import include, path
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from rest_framework import routers

from users.auth_views import login_view, logout_view, session_view
from users.profile_views import profile_clear_view, profile_options_view, profile_view
from users.views import UserViewSet
from workout.views import WorkoutViewSet

router = routers.DefaultRouter()
router.register(r"users", UserViewSet)
router.register(r"workouts", WorkoutViewSet, basename="workout")


urlpatterns = [
    path("api/", include("catalog.urls")),
    path("api/", include("workout.urls")),
    path("api/", include(router.urls)),
    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path(
        "api/docs/",
        SpectacularSwaggerView.as_view(url_name="schema"),
        name="swagger-ui",
    ),
    path("api/profile/", profile_view, name="profile"),
    path("api/profile/clear/", profile_clear_view, name="profile-clear"),
    path("api/profile/options/", profile_options_view, name="profile-options"),
    path("api/auth/session/", session_view, name="auth-session"),
    path("api/auth/login/", login_view, name="auth-login"),
    path("api/auth/logout/", logout_view, name="auth-logout"),
    path("admin/", admin.site.urls),
]
