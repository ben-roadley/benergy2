from fastapi import APIRouter, Depends, HTTPException
from typing import Annotated
from sqlmodel import Session

from ..dependencies import get_session

from ..auth.services import get_current_active_user
from ..users.schemas import User
from ..users.services import get_or_create_profile

from .schemas import (
    WorkoutListItem,
    WorkoutWithExercisesDetails,
    WorkoutLogListItem,
    WorkoutVolumeInsightsDetails,
    WorkoutUpdatePayload,
    WorkoutPutPayload,
    WorkoutResultPayload,
    WarmupSuggestionsResponse,
)
from .services import (
    compute_volume_insights,
    get_workouts,
    get_workout,
    last_workout_session,
    get_workout_logs,
    update_workout_from_payload,
    workout_log_create,
)
from .warmup_suggestions_service import (
    WarmupSuggestionError,
    get_or_generate_warmup_suggestions,
    force_regenerate_warmup_suggestions,
)

from .warmup_suggestions_service import (
    WarmupSuggestionError,
    get_or_generate_warmup_suggestions,
    force_regenerate_warmup_suggestions,
)

router = APIRouter(prefix="/workouts", tags=["workouts"])


@router.get("/", response_model=list[WorkoutListItem])
def fetch_workouts(
    current_user: Annotated[User, Depends(get_current_active_user)],
    session: Session = Depends(get_session),
):
    return get_workouts(user_id=current_user.id, session=session)


@router.get("/last-session/")
def fetch_last_workout_session(
    current_user: Annotated[User, Depends(get_current_active_user)],
    session: Session = Depends(get_session),
):
    """Endpoint to fetch the user's last workout session details."""
    result = last_workout_session(user_id=current_user.id, session=session)
    if not result:
        raise HTTPException(status_code=404, detail="No workout sessions found.")
    return result


@router.get(
    "/{workout_id}/insights/volume/", response_model=WorkoutVolumeInsightsDetails
)
def fetch_workout_insights_volume(
    workout_id: int,
    current_user: Annotated[User, Depends(get_current_active_user)],
    session: Session = Depends(get_session),
):
    workout = get_workout(
        user_id=current_user.id, workout_id=workout_id, session=session
    )
    profile = get_or_create_profile(user_id=current_user.id, session=session)
    return compute_volume_insights(
        session=session,
        workout=workout,
        profile_weight_kg=profile.weight_kg,
    )


@router.get("/{workout_id}/logs", response_model=list[WorkoutLogListItem])
def fetch_workout_logs(
    workout_id: int,
    current_user: Annotated[User, Depends(get_current_active_user)],
    session: Session = Depends(get_session),
):
    w = get_workout_logs(
        user_id=current_user.id, workout_id=workout_id, session=session
    )
    if not w:
        raise HTTPException(status_code=404, detail="Workout not found.")
    return w


@router.get("/{workout_id}/", response_model=WorkoutWithExercisesDetails)
def fetch_workout(
    workout_id: int,
    current_user: Annotated[User, Depends(get_current_active_user)],
    session: Session = Depends(get_session),
):
    w = get_workout(user_id=current_user.id, workout_id=workout_id, session=session)
    if not w:
        raise HTTPException(status_code=404, detail="Workout not found.")
    return w


@router.put("/{workout_id}/", response_model=WorkoutWithExercisesDetails)
def replace_workout(
    workout_id: int,
    payload: WorkoutPutPayload,
    current_user: Annotated[User, Depends(get_current_active_user)],
    session: Session = Depends(get_session),
):
    workout = get_workout(
        user_id=current_user.id, workout_id=workout_id, session=session
    )
    if not workout:
        raise HTTPException(status_code=404, detail="Workout not found.")

    workout_data = {
        "name": payload.name,
        "description": payload.description,
    }
    exercises_data = [ex.model_dump() for ex in payload.exercises]

    try:
        updated = update_workout_from_payload(
            session=session,
            workout=workout,
            workout_data=workout_data,
            exercises_data=exercises_data,
        )
    except ValueError as exc:
        raise HTTPException(status_code=403, detail=str(exc))

    session.commit()
    session.refresh(updated)
    return updated


@router.patch("/{workout_id}/", response_model=WorkoutWithExercisesDetails)
def update_workout(
    workout_id: int,
    payload: WorkoutUpdatePayload,
    current_user: Annotated[User, Depends(get_current_active_user)],
    session: Session = Depends(get_session),
):
    workout = get_workout(
        user_id=current_user.id, workout_id=workout_id, session=session
    )
    if not workout:
        raise HTTPException(status_code=404, detail="Workout not found.")

    workout_data = {}
    if payload.name is not None:
        workout_data["name"] = payload.name
    if payload.description is not None:
        workout_data["description"] = payload.description

    exercises_data = None
    if payload.exercises is not None:
        exercises_data = [ex.model_dump() for ex in payload.exercises]

    try:
        updated = update_workout_from_payload(
            session=session,
            workout=workout,
            workout_data=workout_data,
            exercises_data=exercises_data,
        )
    except ValueError as exc:
        raise HTTPException(status_code=403, detail=str(exc))

    session.commit()
    session.refresh(updated)
    return updated


@router.get(
    "/{workout_id}/warmup-suggestions/", response_model=WarmupSuggestionsResponse
)
def fetch_warmup_suggestions(
    workout_id: int,
    current_user: Annotated[User, Depends(get_current_active_user)],
    session: Session = Depends(get_session),
):
    workout = get_workout(
        user_id=current_user.id, workout_id=workout_id, session=session
    )
    if not workout:
        raise HTTPException(status_code=404, detail="Workout not found.")

    try:
        profile = get_or_create_profile(user_id=current_user.id, session=session)
    except Exception:
        profile = None

    try:
        suggestion = get_or_generate_warmup_suggestions(
            workout=workout, profile=profile, session=session
        )
    except WarmupSuggestionError as exc:
        raise HTTPException(status_code=503, detail=str(exc))

    return WarmupSuggestionsResponse(
        suggestions=suggestion.suggestions,
        generated_at=suggestion.generated_at,
    )


@router.post(
    "/{workout_id}/warmup-suggestions/", response_model=WarmupSuggestionsResponse
)
def regenerate_warmup_suggestions(
    workout_id: int,
    current_user: Annotated[User, Depends(get_current_active_user)],
    session: Session = Depends(get_session),
):
    workout = get_workout(
        user_id=current_user.id, workout_id=workout_id, session=session
    )
    if not workout:
        raise HTTPException(status_code=404, detail="Workout not found.")

    try:
        profile = get_or_create_profile(user_id=current_user.id, session=session)
    except Exception:
        profile = None

    try:
        suggestion = force_regenerate_warmup_suggestions(
            workout=workout, profile=profile, session=session
        )
    except WarmupSuggestionError as exc:
        print(
            f"Error generating warmup suggestions: {exc}"
        )  # Log the error for debugging
        raise HTTPException(status_code=503, detail=str(exc))

    return WarmupSuggestionsResponse(
        suggestions=suggestion.suggestions,
        generated_at=suggestion.generated_at,
    )


@router.post("/results/", status_code=201)
def submit_workout_results(
    payload: WorkoutResultPayload,
    current_user: Annotated[User, Depends(get_current_active_user)],
    session: Session = Depends(get_session),
):
    try:
        workout_log_create(
            user_id=current_user.id,
            workout_id=payload.workout_id,
            results=payload.results,
            session=session,
        )
    except ValueError as exc:
        raise HTTPException(status_code=404, detail=str(exc))

    session.commit()
    return {"message": "Workout results saved."}
