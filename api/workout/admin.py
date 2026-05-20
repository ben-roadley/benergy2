from django.contrib import admin

from .models import Exercise, SetOfReps, Workout, WorkoutLog, WorkoutLogEntry

admin.site.register(Workout)
admin.site.register(Exercise)
admin.site.register(SetOfReps)
admin.site.register(WorkoutLog)
admin.site.register(WorkoutLogEntry)
