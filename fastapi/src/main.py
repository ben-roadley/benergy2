from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .config import CORS_ALLOWED_ORIGINS

from .auth.router import router as auth_router
from .catalog.router import router as catalog_router
from .users.router import router as users_router
from .workouts.router import router as workouts_router


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(users_router)
app.include_router(workouts_router)
app.include_router(catalog_router)
