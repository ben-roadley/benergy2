import os

CORS_ALLOWED_ORIGINS = os.environ.get(
    "CORS_ALLOWED_ORIGINS", "http://localhost:8080"
).split(" ")

HF_TOKEN = os.environ.get("HF_TOKEN", "")
