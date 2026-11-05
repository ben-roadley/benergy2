import { Routes } from '@angular/router';
import { Home } from './home/home';
import { MuscleExercises } from './muscle-exercises/muscle-exercises';
import { ExerciseDetail } from './exercise-detail/exercise-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'muscles/:name', component: MuscleExercises },
  { path: 'exercises/:slug', component: ExerciseDetail },
];
