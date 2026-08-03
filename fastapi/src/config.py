import os

CORS_ALLOWED_ORIGINS = os.environ.get(
    "CORS_ALLOWED_ORIGINS", "http://localhost:8080"
).split(" ")

LLM_API_KEY = os.environ.get("LLM_API_KEY", "")
LLM_API_BASE = os.environ.get("LLM_API_BASE", "https://models.inference.ai.azure.com")
LLM_MODEL = os.environ.get("LLM_MODEL", "gpt-4o-mini")
