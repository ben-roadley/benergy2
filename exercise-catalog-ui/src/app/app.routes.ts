import { Routes } from '@angular/router';
import { Home } from './home/home';
import { MuscleExercises } from './muscle-exercises/muscle-exercises';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'muscles/:name', component: MuscleExercises },
];
