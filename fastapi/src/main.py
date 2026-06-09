from fastapi import FastAPI
from fastapi import Depends, HTTPException
from sqlmodel import Session

from src.database import get_session
from src.workouts.services import get_workouts
from src.workouts.schemas import WorkoutBaseSchema

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/workouts/", response_model=list[WorkoutBaseSchema])
def read_items(session: Session = Depends(get_session)):
    user_id = 2
    return get_workouts(session, user_id)
