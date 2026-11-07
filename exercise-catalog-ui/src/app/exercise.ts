import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ExerciseSummary {
  slug: string;
  name: string;
  category: string;
  equipment: string | null;
  level: string;
  image: string | null;
}

export interface ExerciseDetail {
  slug: string;
  name: string;
  category: string;
  force: string | null;
  level: string;
  mechanic: string | null;
  equipment: string | null;
  primary_muscles: string[];
  secondary_muscles: string[];
  instructions: string[];
  images: string[];
}

@Injectable({ providedIn: 'root' })
export class ExerciseService {
  private readonly http = inject(HttpClient);

  /** One full exercise, or a 404 error when the slug is unknown. */
  getBySlug(slug: string): Observable<ExerciseDetail> {
    return this.http.get<ExerciseDetail>(
      `/catalog-api/exercise-definitions/${encodeURIComponent(slug)}`,
    );
  }

  /** Exercises of one primary muscle, sorted by name (proxied to the catalog API). */
  getByMuscle(muscle: string): Observable<ExerciseSummary[]> {
    return this.http.get<ExerciseSummary[]>('/catalog-api/exercise-definitions', {
      params: { primary_muscle: muscle },
    });
  }
}
