import os
from sqlmodel import create_engine, Session
from fastapi import Depends, FastAPI

SQL_DATABASE_URL = f"postgresql://{os.getenv('SQL_USER', 'hello_django')}:{os.getenv('SQL_PASSWORD', 'hello_django')}@{os.getenv('SQL_HOST', 'db')}:{os.getenv('SQL_PORT', '5432')}/{os.getenv('SQL_DATABASE', 'postgres')}"
engine = create_engine(SQL_DATABASE_URL)

def get_session():
    with Session(engine) as session:
        yield session
