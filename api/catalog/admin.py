from django.contrib import admin

from .models import ExerciseDefinition


@admin.register(ExerciseDefinition)
class ExerciseDefinitionAdmin(admin.ModelAdmin):
    list_display = ["slug", "name", "category", "level", "equipment"]
    search_fields = ["name", "category", "equipment"]
