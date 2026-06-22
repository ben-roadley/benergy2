from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session

from ..dependencies import get_session

from .schemas import CatalogExercisedefinitionBaseSchema
from .services import search_exercise_definitions

router = APIRouter(prefix="/exercise-definitions", tags=["exercise-definitions"])


@router.get("/", response_model=list[CatalogExercisedefinitionBaseSchema])
def query_exercise_definitions(q: str, session: Session = Depends(get_session)):
    """Endpoint to search for exercise definitions based on a query parameter."""
    if len(q) < 2:
        raise HTTPException(
            status_code=400,
            detail="Query parameter 'q' must be at least 2 characters long.",
        )
    return search_exercise_definitions(q, session)
