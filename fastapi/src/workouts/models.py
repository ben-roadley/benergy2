from typing import Optional
import datetime
import decimal

from sqlalchemy import BigInteger, Boolean, CheckConstraint, Column, Date, DateTime, ForeignKeyConstraint, Identity, Index, Integer, Numeric, PrimaryKeyConstraint, SmallInteger, String, Text, UniqueConstraint
from sqlalchemy.dialects.postgresql import JSONB
from sqlmodel import Field, Relationship, SQLModel

class AuthGroup(SQLModel, table=True):
    __tablename__ = 'auth_group'
    __table_args__ = (
        PrimaryKeyConstraint('id', name='auth_group_pkey'),
        UniqueConstraint('name', name='auth_group_name_key'),
        Index('auth_group_name_a6ea08ec_like', 'name', postgresql_ops={'name': 'varchar_pattern_ops'})
    )

    id: int = Field(sa_column=Column('id', Integer, Identity(start=1, increment=1, minvalue=1, maxvalue=2147483647, cycle=False, cache=1), primary_key=True))
    name: str = Field(sa_column=Column('name', String(150), nullable=False))

    auth_user_groups: list['AuthUserGroups'] = Relationship(back_populates='group')
    auth_group_permissions: list['AuthGroupPermissions'] = Relationship(back_populates='group')


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

    auth_user_groups: list['AuthUserGroups'] = Relationship(back_populates='user')
    django_admin_log: list['DjangoAdminLog'] = Relationship(back_populates='user')
    users_userprofile: 'UsersUserprofile' = Relationship(back_populates='user', sa_relationship_kwargs={'uselist': False})
    workout_workout: list['WorkoutWorkout'] = Relationship(back_populates='user')
    auth_user_user_permissions: list['AuthUserUserPermissions'] = Relationship(back_populates='user')
    workout_workoutlog: list['WorkoutWorkoutlog'] = Relationship(back_populates='user')


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


class DjangoContentType(SQLModel, table=True):
    __tablename__ = 'django_content_type'
    __table_args__ = (
        PrimaryKeyConstraint('id', name='django_content_type_pkey'),
        UniqueConstraint('app_label', 'model', name='django_content_type_app_label_model_76bd3d3b_uniq')
    )

    id: int = Field(sa_column=Column('id', Integer, Identity(start=1, increment=1, minvalue=1, maxvalue=2147483647, cycle=False, cache=1), primary_key=True))
    app_label: str = Field(sa_column=Column('app_label', String(100), nullable=False))
    model: str = Field(sa_column=Column('model', String(100), nullable=False))

    auth_permission: list['AuthPermission'] = Relationship(back_populates='content_type')
    django_admin_log: list['DjangoAdminLog'] = Relationship(back_populates='content_type')


class DjangoMigrations(SQLModel, table=True):
    __tablename__ = 'django_migrations'
    __table_args__ = (
        PrimaryKeyConstraint('id', name='django_migrations_pkey'),
    )

    id: int = Field(sa_column=Column('id', Integer, Identity(start=1, increment=1, minvalue=1, maxvalue=2147483647, cycle=False, cache=1), primary_key=True))
    app: str = Field(sa_column=Column('app', String(255), nullable=False))
    name: str = Field(sa_column=Column('name', String(255), nullable=False))
    applied: datetime.datetime = Field(sa_column=Column('applied', DateTime(True), nullable=False))


class DjangoSession(SQLModel, table=True):
    __tablename__ = 'django_session'
    __table_args__ = (
        PrimaryKeyConstraint('session_key', name='django_session_pkey'),
        Index('django_session_expire_date_a5c62663', 'expire_date'),
        Index('django_session_session_key_c0390e0f_like', 'session_key', postgresql_ops={'session_key': 'varchar_pattern_ops'})
    )

    session_key: str = Field(sa_column=Column('session_key', String(40), primary_key=True))
    session_data: str = Field(sa_column=Column('session_data', Text, nullable=False))
    expire_date: datetime.datetime = Field(sa_column=Column('expire_date', DateTime(True), nullable=False))


class AuthPermission(SQLModel, table=True):
    __tablename__ = 'auth_permission'
    __table_args__ = (
        ForeignKeyConstraint(['content_type_id'], ['django_content_type.id'], deferrable=True, initially='DEFERRED', name='auth_permission_content_type_id_2f476e4b_fk_django_co'),
        PrimaryKeyConstraint('id', name='auth_permission_pkey'),
        UniqueConstraint('content_type_id', 'codename', name='auth_permission_content_type_id_codename_01ab375a_uniq'),
        Index('auth_permission_content_type_id_2f476e4b', 'content_type_id')
    )

    id: int = Field(sa_column=Column('id', Integer, Identity(start=1, increment=1, minvalue=1, maxvalue=2147483647, cycle=False, cache=1), primary_key=True))
    name: str = Field(sa_column=Column('name', String(255), nullable=False))
    content_type_id: int = Field(sa_column=Column('content_type_id', Integer, nullable=False))
    codename: str = Field(sa_column=Column('codename', String(100), nullable=False))

    content_type: 'DjangoContentType' = Relationship(back_populates='auth_permission')
    auth_group_permissions: list['AuthGroupPermissions'] = Relationship(back_populates='permission')
    auth_user_user_permissions: list['AuthUserUserPermissions'] = Relationship(back_populates='permission')


class AuthUserGroups(SQLModel, table=True):
    __tablename__ = 'auth_user_groups'
    __table_args__ = (
        ForeignKeyConstraint(['group_id'], ['auth_group.id'], deferrable=True, initially='DEFERRED', name='auth_user_groups_group_id_97559544_fk_auth_group_id'),
        ForeignKeyConstraint(['user_id'], ['auth_user.id'], deferrable=True, initially='DEFERRED', name='auth_user_groups_user_id_6a12ed8b_fk_auth_user_id'),
        PrimaryKeyConstraint('id', name='auth_user_groups_pkey'),
        UniqueConstraint('user_id', 'group_id', name='auth_user_groups_user_id_group_id_94350c0c_uniq'),
        Index('auth_user_groups_group_id_97559544', 'group_id'),
        Index('auth_user_groups_user_id_6a12ed8b', 'user_id')
    )

    id: int = Field(sa_column=Column('id', Integer, Identity(start=1, increment=1, minvalue=1, maxvalue=2147483647, cycle=False, cache=1), primary_key=True))
    user_id: int = Field(sa_column=Column('user_id', Integer, nullable=False))
    group_id: int = Field(sa_column=Column('group_id', Integer, nullable=False))

    group: 'AuthGroup' = Relationship(back_populates='auth_user_groups')
    user: 'AuthUser' = Relationship(back_populates='auth_user_groups')


class DjangoAdminLog(SQLModel, table=True):
    __tablename__ = 'django_admin_log'
    __table_args__ = (
        CheckConstraint('action_flag >= 0', name='django_admin_log_action_flag_check'),
        ForeignKeyConstraint(['content_type_id'], ['django_content_type.id'], deferrable=True, initially='DEFERRED', name='django_admin_log_content_type_id_c4bce8eb_fk_django_co'),
        ForeignKeyConstraint(['user_id'], ['auth_user.id'], deferrable=True, initially='DEFERRED', name='django_admin_log_user_id_c564eba6_fk_auth_user_id'),
        PrimaryKeyConstraint('id', name='django_admin_log_pkey'),
        Index('django_admin_log_content_type_id_c4bce8eb', 'content_type_id'),
        Index('django_admin_log_user_id_c564eba6', 'user_id')
    )

    id: int = Field(sa_column=Column('id', Integer, Identity(start=1, increment=1, minvalue=1, maxvalue=2147483647, cycle=False, cache=1), primary_key=True))
    action_time: datetime.datetime = Field(sa_column=Column('action_time', DateTime(True), nullable=False))
    object_repr: str = Field(sa_column=Column('object_repr', String(200), nullable=False))
    action_flag: int = Field(sa_column=Column('action_flag', SmallInteger, nullable=False))
    change_message: str = Field(sa_column=Column('change_message', Text, nullable=False))
    user_id: int = Field(sa_column=Column('user_id', Integer, nullable=False))
    object_id: Optional[str] = Field(default=None, sa_column=Column('object_id', Text))
    content_type_id: Optional[int] = Field(default=None, sa_column=Column('content_type_id', Integer))

    content_type: Optional['DjangoContentType'] = Relationship(back_populates='django_admin_log')
    user: 'AuthUser' = Relationship(back_populates='django_admin_log')


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
    workout_exercise: list['WorkoutExercise'] = Relationship(back_populates='workout')
    workout_warmupsuggestion: 'WorkoutWarmupsuggestion' = Relationship(back_populates='workout', sa_relationship_kwargs={'uselist': False})
    workout_workoutlog: list['WorkoutWorkoutlog'] = Relationship(back_populates='workout')


class AuthGroupPermissions(SQLModel, table=True):
    __tablename__ = 'auth_group_permissions'
    __table_args__ = (
        ForeignKeyConstraint(['group_id'], ['auth_group.id'], deferrable=True, initially='DEFERRED', name='auth_group_permissions_group_id_b120cbf9_fk_auth_group_id'),
        ForeignKeyConstraint(['permission_id'], ['auth_permission.id'], deferrable=True, initially='DEFERRED', name='auth_group_permissio_permission_id_84c5c92e_fk_auth_perm'),
        PrimaryKeyConstraint('id', name='auth_group_permissions_pkey'),
        UniqueConstraint('group_id', 'permission_id', name='auth_group_permissions_group_id_permission_id_0cd325b0_uniq'),
        Index('auth_group_permissions_group_id_b120cbf9', 'group_id'),
        Index('auth_group_permissions_permission_id_84c5c92e', 'permission_id')
    )

    id: int = Field(sa_column=Column('id', Integer, Identity(start=1, increment=1, minvalue=1, maxvalue=2147483647, cycle=False, cache=1), primary_key=True))
    group_id: int = Field(sa_column=Column('group_id', Integer, nullable=False))
    permission_id: int = Field(sa_column=Column('permission_id', Integer, nullable=False))

    group: 'AuthGroup' = Relationship(back_populates='auth_group_permissions')
    permission: 'AuthPermission' = Relationship(back_populates='auth_group_permissions')


class AuthUserUserPermissions(SQLModel, table=True):
    __tablename__ = 'auth_user_user_permissions'
    __table_args__ = (
        ForeignKeyConstraint(['permission_id'], ['auth_permission.id'], deferrable=True, initially='DEFERRED', name='auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm'),
        ForeignKeyConstraint(['user_id'], ['auth_user.id'], deferrable=True, initially='DEFERRED', name='auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id'),
        PrimaryKeyConstraint('id', name='auth_user_user_permissions_pkey'),
        UniqueConstraint('user_id', 'permission_id', name='auth_user_user_permissions_user_id_permission_id_14a6b632_uniq'),
        Index('auth_user_user_permissions_permission_id_1fbb5f2c', 'permission_id'),
        Index('auth_user_user_permissions_user_id_a95ead1b', 'user_id')
    )

    id: int = Field(sa_column=Column('id', Integer, Identity(start=1, increment=1, minvalue=1, maxvalue=2147483647, cycle=False, cache=1), primary_key=True))
    user_id: int = Field(sa_column=Column('user_id', Integer, nullable=False))
    permission_id: int = Field(sa_column=Column('permission_id', Integer, nullable=False))

    permission: 'AuthPermission' = Relationship(back_populates='auth_user_user_permissions')
    user: 'AuthUser' = Relationship(back_populates='auth_user_user_permissions')


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
    workout: 'WorkoutWorkout' = Relationship(back_populates='workout_exercise')
    workout_setofreps: list['WorkoutSetofreps'] = Relationship(back_populates='exercise')


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

    exercise: 'WorkoutExercise' = Relationship(back_populates='workout_setofreps')
    workout_workoutlogentry: list['WorkoutWorkoutlogentry'] = Relationship(back_populates='set_of_reps')


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