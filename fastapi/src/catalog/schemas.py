from pydantic import BaseModel, ConfigDict


class CatalogExercisedefinitionBaseSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    slug: str
    name: str
    category: str
    equipment: str | None = None
    primary_muscles: list[str]
    level: str
