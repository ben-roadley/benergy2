from typing import Optional
import datetime
import decimal

from sqlalchemy import BigInteger, Column, DateTime, ForeignKeyConstraint, Identity, Index, Integer, Numeric, PrimaryKeyConstraint, SmallInteger, String, Text, UniqueConstraint
from sqlalchemy.dialects.postgresql import JSONB
from sqlmodel import Field, Relationship, SQLModel

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

    workout_exercise: list['WorkoutExercise'] = Relationship(back_populates='exercise_definition')


class WorkoutWorkout(SQLModel, table=True):
    __tablename__ = 'workout_workout'
    __table_args__ = (
        ForeignKeyConstraint(['user_id'], ['auth_user.id'], deferrable=True, initially='DEFERRED', name='workout_workout_user_id_9f8fbd53_fk_auth_user_id'),
        PrimaryKeyConstraint('id', name='workout_workout_pkey'),
        Index('workout_workout_user_id_9f8fbd53', 'user_id')
    )

    id: int = Field(sa_column=Column('id', BigInteger, Identity(start=1, increment=1, minvalue=1, maxvalue=9223372036854775807, cycle=False, cache=1), primary_key=True))
    name: str = Field(sa_column=Column('name', String(200), nullable=False))
    user_id: int = Field(sa_column=Column('user_id', Integer, nullable=False))
    updated_at: datetime.datetime = Field(sa_column=Column('updated_at', DateTime(True), nullable=False))
    description: str = Field(sa_column=Column('description', Text, nullable=False))

    user: 'AuthUser' = Relationship(back_populates='workout_workout')
    exercises: list['WorkoutExercise'] = Relationship(back_populates='workout')
    workout_warmupsuggestion: 'WorkoutWarmupsuggestion' = Relationship(back_populates='workout', sa_relationship_kwargs={'uselist': False})
    workout_workoutlog: list['WorkoutWorkoutlog'] = Relationship(back_populates='workout')


class WorkoutExercise(SQLModel, table=True):
    __tablename__ = 'workout_exercise'
    __table_args__ = (
        ForeignKeyConstraint(['exercise_definition_id'], ['catalog_exercisedefinition.slug'], deferrable=True, initially='DEFERRED', name='workout_exercise_exercise_definition__0d289ed6_fk_catalog_e'),
        ForeignKeyConstraint(['workout_id'], ['workout_workout.id'], deferrable=True, initially='DEFERRED', name='workout_exercise_workout_id_281489e7_fk_workout_workout_id'),
        PrimaryKeyConstraint('id', name='workout_exercise_pkey'),
        UniqueConstraint('workout_id', 'order', name='unique_order_for_workout'),
        Index('workout_exercise_exercise_definition_id_0d289ed6', 'exercise_definition_id'),
        Index('workout_exercise_exercise_definition_id_0d289ed6_like', 'exercise_definition_id', postgresql_ops={'exercise_definition_id': 'varchar_pattern_ops'}),
        Index('workout_exercise_workout_id_281489e7', 'workout_id')
    )

    id: int = Field(sa_column=Column('id', BigInteger, Identity(start=1, increment=1, minvalue=1, maxvalue=9223372036854775807, cycle=False, cache=1), primary_key=True))
    order: int = Field(sa_column=Column('order', SmallInteger, nullable=False))
    workout_id: int = Field(sa_column=Column('workout_id', BigInteger, nullable=False))
    exercise_definition_id: str = Field(sa_column=Column('exercise_definition_id', String(100), nullable=False))
    rest_time_after: int = Field(sa_column=Column('rest_time_after', SmallInteger, nullable=False))

    exercise_definition: 'CatalogExercisedefinition' = Relationship(back_populates='workout_exercise')
    workout: 'WorkoutWorkout' = Relationship(back_populates='exercises')
    set_of_reps: list['WorkoutSetofreps'] = Relationship(back_populates='exercise')


class WorkoutSetofreps(SQLModel, table=True):
    __tablename__ = 'workout_setofreps'
    __table_args__ = (
        ForeignKeyConstraint(['exercise_id'], ['workout_exercise.id'], deferrable=True, initially='DEFERRED', name='workout_setofreps_exercise_id_3a05f215_fk_workout_exercise_id'),
        PrimaryKeyConstraint('id', name='workout_setofreps_pkey'),
        UniqueConstraint('exercise_id', 'order', name='unique_order_for_exercise'),
        Index('workout_setofreps_exercise_id_3a05f215', 'exercise_id')
    )

    id: int = Field(sa_column=Column('id', BigInteger, Identity(start=1, increment=1, minvalue=1, maxvalue=9223372036854775807, cycle=False, cache=1), primary_key=True))
    order: int = Field(sa_column=Column('order', SmallInteger, nullable=False))
    nb_reps: int = Field(sa_column=Column('nb_reps', SmallInteger, nullable=False))
    exercise_id: int = Field(sa_column=Column('exercise_id', BigInteger, nullable=False))
    weight: Optional[decimal.Decimal] = Field(default=None, sa_column=Column('weight', Numeric(6, 2)))

    exercise: 'WorkoutExercise' = Relationship(back_populates='set_of_reps')
    workout_workoutlogentry: list['WorkoutWorkoutlogentry'] = Relationship(back_populates='set_of_reps')


class WorkoutWarmupsuggestion(SQLModel, table=True):
    __tablename__ = 'workout_warmupsuggestion'
    __table_args__ = (
        ForeignKeyConstraint(['workout_id'], ['workout_workout.id'], deferrable=True, initially='DEFERRED', name='workout_warmupsugges_workout_id_5f8efa9f_fk_workout_w'),
        PrimaryKeyConstraint('id', name='workout_warmupsuggestion_pkey'),
        UniqueConstraint('workout_id', name='workout_warmupsuggestion_workout_id_key')
    )

    id: int = Field(sa_column=Column('id', BigInteger, Identity(start=1, increment=1, minvalue=1, maxvalue=9223372036854775807, cycle=False, cache=1), primary_key=True))
    exercises_hash: str = Field(sa_column=Column('exercises_hash', String(64), nullable=False))
    suggestions: dict = Field(sa_column=Column('suggestions', JSONB, nullable=False))
    generated_at: datetime.datetime = Field(sa_column=Column('generated_at', DateTime(True), nullable=False))
    workout_id: int = Field(sa_column=Column('workout_id', BigInteger, nullable=False))

    workout: 'WorkoutWorkout' = Relationship(back_populates='workout_warmupsuggestion')


class WorkoutWorkoutlog(SQLModel, table=True):
    __tablename__ = 'workout_workoutlog'
    __table_args__ = (
        ForeignKeyConstraint(['user_id'], ['auth_user.id'], deferrable=True, initially='DEFERRED', name='workout_workoutlog_user_id_d6499a67_fk_auth_user_id'),
        ForeignKeyConstraint(['workout_id'], ['workout_workout.id'], deferrable=True, initially='DEFERRED', name='workout_workoutlog_workout_id_f7a63ded_fk_workout_workout_id'),
        PrimaryKeyConstraint('id', name='workout_workoutlog_pkey'),
        Index('workout_workoutlog_user_id_d6499a67', 'user_id'),
        Index('workout_workoutlog_workout_id_f7a63ded', 'workout_id')
    )

    id: int = Field(sa_column=Column('id', BigInteger, Identity(start=1, increment=1, minvalue=1, maxvalue=9223372036854775807, cycle=False, cache=1), primary_key=True))
    completed_at: datetime.datetime = Field(sa_column=Column('completed_at', DateTime(True), nullable=False))
    user_id: int = Field(sa_column=Column('user_id', Integer, nullable=False))
    workout_id: int = Field(sa_column=Column('workout_id', BigInteger, nullable=False))

    user: 'AuthUser' = Relationship(back_populates='workout_workoutlog')
    workout: 'WorkoutWorkout' = Relationship(back_populates='workout_workoutlog')
    workout_workoutlogentry: list['WorkoutWorkoutlogentry'] = Relationship(back_populates='log')


class WorkoutWorkoutlogentry(SQLModel, table=True):
    __tablename__ = 'workout_workoutlogentry'
    __table_args__ = (
        ForeignKeyConstraint(['log_id'], ['workout_workoutlog.id'], deferrable=True, initially='DEFERRED', name='workout_workoutlogen_log_id_b4981df9_fk_workout_w'),
        ForeignKeyConstraint(['set_of_reps_id'], ['workout_setofreps.id'], deferrable=True, initially='DEFERRED', name='workout_workoutlogen_set_of_reps_id_a1e6f826_fk_workout_s'),
        PrimaryKeyConstraint('id', name='workout_workoutlogentry_pkey'),
        Index('workout_workoutlogentry_log_id_b4981df9', 'log_id'),
        Index('workout_workoutlogentry_set_of_reps_id_a1e6f826', 'set_of_reps_id')
    )

    id: int = Field(sa_column=Column('id', BigInteger, Identity(start=1, increment=1, minvalue=1, maxvalue=9223372036854775807, cycle=False, cache=1), primary_key=True))
    nb_reps_target: int = Field(sa_column=Column('nb_reps_target', SmallInteger, nullable=False))
    nb_reps_actual: int = Field(sa_column=Column('nb_reps_actual', SmallInteger, nullable=False))
    log_id: int = Field(sa_column=Column('log_id', BigInteger, nullable=False))
    set_of_reps_id: int = Field(sa_column=Column('set_of_reps_id', BigInteger, nullable=False))
    weight_actual: Optional[decimal.Decimal] = Field(default=None, sa_column=Column('weight_actual', Numeric(6, 2)))
    weight_target: Optional[decimal.Decimal] = Field(default=None, sa_column=Column('weight_target', Numeric(6, 2)))

    log: 'WorkoutWorkoutlog' = Relationship(back_populates='workout_workoutlogentry')
    set_of_reps: 'WorkoutSetofreps' = Relationship(back_populates='workout_workoutlogentry')