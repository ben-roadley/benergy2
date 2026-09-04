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


Testing:
open a shell in container: "pytest"
