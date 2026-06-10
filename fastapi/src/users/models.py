from typing import Optional
import datetime
import decimal

from sqlalchemy import BigInteger, Boolean, CheckConstraint, Column, Date, DateTime, ForeignKeyConstraint, Identity, Index, Integer, Numeric, PrimaryKeyConstraint, SmallInteger, String, Text, UniqueConstraint
from sqlalchemy.dialects.postgresql import JSONB
from sqlmodel import Field, Relationship, SQLModel

from src.workouts.models import WorkoutWorkout, WorkoutWorkoutlog



class AuthUser(SQLModel, table=True):
    __tablename__ = 'auth_user'
    __table_args__ = (
        PrimaryKeyConstraint('id', name='auth_user_pkey'),
        UniqueConstraint('username', name='auth_user_username_key'),
        Index('auth_user_username_6821ab7c_like', 'username', postgresql_ops={'username': 'varchar_pattern_ops'})
    )

    id: int = Field(sa_column=Column('id', Integer, Identity(start=1, increment=1, minvalue=1, maxvalue=2147483647, cycle=False, cache=1), primary_key=True))
    password: str = Field(sa_column=Column('password', String(128), nullable=False))
    is_superuser: bool = Field(sa_column=Column('is_superuser', Boolean, nullable=False))
    username: str = Field(sa_column=Column('username', String(150), nullable=False))
    first_name: str = Field(sa_column=Column('first_name', String(150), nullable=False))
    last_name: str = Field(sa_column=Column('last_name', String(150), nullable=False))
    email: str = Field(sa_column=Column('email', String(254), nullable=False))
    is_staff: bool = Field(sa_column=Column('is_staff', Boolean, nullable=False))
    is_active: bool = Field(sa_column=Column('is_active', Boolean, nullable=False))
    date_joined: datetime.datetime = Field(sa_column=Column('date_joined', DateTime(True), nullable=False))
    last_login: Optional[datetime.datetime] = Field(default=None, sa_column=Column('last_login', DateTime(True)))

    users_userprofile: 'UsersUserprofile' = Relationship(back_populates='user', sa_relationship_kwargs={'uselist': False})
    workout_workout: list['WorkoutWorkout'] = Relationship(back_populates='user')
    workout_workoutlog: list['WorkoutWorkoutlog'] = Relationship(back_populates='user')




class UsersUserprofile(SQLModel, table=True):
    __tablename__ = 'users_userprofile'
    __table_args__ = (
        ForeignKeyConstraint(['user_id'], ['auth_user.id'], deferrable=True, initially='DEFERRED', name='users_userprofile_user_id_87251ef1_fk_auth_user_id'),
        PrimaryKeyConstraint('id', name='users_userprofile_pkey'),
        UniqueConstraint('user_id', name='users_userprofile_user_id_key')
    )

    id: int = Field(sa_column=Column('id', BigInteger, Identity(start=1, increment=1, minvalue=1, maxvalue=9223372036854775807, cycle=False, cache=1), primary_key=True))
    display_name: str = Field(sa_column=Column('display_name', String(100), nullable=False))
    sex: str = Field(sa_column=Column('sex', String(20), nullable=False))
    fitness_level: str = Field(sa_column=Column('fitness_level', String(20), nullable=False))
    goals: dict = Field(sa_column=Column('goals', JSONB, nullable=False))
    equipment: dict = Field(sa_column=Column('equipment', JSONB, nullable=False))
    session_duration: str = Field(sa_column=Column('session_duration', String(10), nullable=False))
    injury_history: str = Field(sa_column=Column('injury_history', Text, nullable=False))
    lifestyle_description: str = Field(sa_column=Column('lifestyle_description', Text, nullable=False))
    sleep_quality: str = Field(sa_column=Column('sleep_quality', String(10), nullable=False))
    stress_level: str = Field(sa_column=Column('stress_level', String(10), nullable=False))
    user_id: int = Field(sa_column=Column('user_id', Integer, nullable=False))
    date_of_birth: Optional[datetime.date] = Field(default=None, sa_column=Column('date_of_birth', Date))
    weight_kg: Optional[decimal.Decimal] = Field(default=None, sa_column=Column('weight_kg', Numeric(5, 1)))
    height_cm: Optional[int] = Field(default=None, sa_column=Column('height_cm', SmallInteger))
    training_days_per_week: Optional[int] = Field(default=None, sa_column=Column('training_days_per_week', SmallInteger))

    user: 'AuthUser' = Relationship(back_populates='users_userprofile')
