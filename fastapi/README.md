# Project structure:

src/
├── main.py          # Application factory
├── config.py        # Global settings
├── database.py      # DB connection setup
├── auth/            # Authentication domain
│   ├── router.py
│   ├── schemas.py
│   ├── models.py
│   ├── service.py   # Business logic
│   └── dependencies.py
├── users/           # Users domain
├── posts/           # Posts domain
└── common/          # Shared utilities
tests/   


# DB Table names

["django_migrations","django_content_type","auth_permission","auth_group","auth_group_permissions","auth_user","auth_user_groups","auth_user_user_permissions","django_admin_log","catalog_exercisedefinition","django_session","workout_exercise","users_userprofile","workout_setofreps","workout_workout","workout_workoutlog","workout_workoutlogentry","workout_warmupsuggestion"]