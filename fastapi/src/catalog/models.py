from typing import Optional

from sqlalchemy import Column, Index, PrimaryKeyConstraint, String
from sqlalchemy.dialects.postgresql import JSONB
from sqlmodel import Field, SQLModel



class CatalogExercisedefinition(SQLModel, table=True):
    __tablename__ = 'catalog_exercisedefinition'
    __table_args__ = (
        PrimaryKeyConstraint('slug', name='catalog_exercisedefinition_pkey'),
        Index('catalog_exercisedefinition_slug_b82a0043_like', 'slug', postgresql_ops={'slug': 'varchar_pattern_ops'})
    )

    slug: str = Field(sa_column=Column('slug', String(100), primary_key=True))
    name: str = Field(sa_column=Column('name', String(200), nullable=False))
    category: str = Field(sa_column=Column('category', String(50), nullable=False))
    level: str = Field(sa_column=Column('level', String(20), nullable=False))
    primary_muscles: dict = Field(sa_column=Column('primary_muscles', JSONB, nullable=False))
    secondary_muscles: dict = Field(sa_column=Column('secondary_muscles', JSONB, nullable=False))
    instructions: dict = Field(sa_column=Column('instructions', JSONB, nullable=False))
    images: dict = Field(sa_column=Column('images', JSONB, nullable=False))
    force: Optional[str] = Field(default=None, sa_column=Column('force', String(20)))
    mechanic: Optional[str] = Field(default=None, sa_column=Column('mechanic', String(20)))
    equipment: Optional[str] = Field(default=None, sa_column=Column('equipment', String(50)))