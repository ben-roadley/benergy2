import os
from sqlmodel import create_engine, Session
# from sqlalchemy import create_engine
from fastapi import Depends, FastAPI

# Sync Example
SQL_DATABASE_URL = f"postgresql://{os.getenv('SQL_USER')}:{os.getenv('SQL_PASSWORD')}@{os.getenv('SQL_HOST')}:{os.getenv('SQL_PORT')}/{os.getenv('SQL_DATABASE')}"
engine = create_engine(SQL_DATABASE_URL)

def get_session():
    with Session(engine) as session:
        yield session

# Async Example
# from sqlmodel.ext.asyncio.session import AsyncSession
# engine = create_async_engine(SQL_DATABASE_URL, echo=True)   

# def get_table_names(session: Session):
#     from sqlalchemy import inspect

#     inspector = inspect(engine)
#     table_names = inspector.get_table_names()
#     return table_names