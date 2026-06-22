from sqlmodel import Session, select

from .schemas import CatalogExercisedefinitionBaseSchema
from .models import CatalogExercisedefinition


def search_exercise_definitions(
    query: str, session: Session
) -> list[CatalogExercisedefinitionBaseSchema]:
    statement = (
        select(CatalogExercisedefinition)
        .where(CatalogExercisedefinition.name.ilike(f"%{query}%"))
        .limit(30)
    )
    results = session.exec(statement).all()
    return [
        CatalogExercisedefinitionBaseSchema.model_validate(exercise)
        for exercise in results
    ]
