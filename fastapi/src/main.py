from fastapi import FastAPI
from .auth.router import router as auth_router
from .users.router import router as users_router
from .workouts.router import router as workouts_router


app = FastAPI()

app.include_router(auth_router)
app.include_router(users_router)
app.include_router(workouts_router)