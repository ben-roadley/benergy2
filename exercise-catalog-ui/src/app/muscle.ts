import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MuscleCount {
  name: string;
  count: number;
}

@Injectable({ providedIn: 'root' })
export class MuscleService {
  private readonly http = inject(HttpClient);

  /** Primary muscles with their exercise count, sorted by name (proxied to the catalog API). */
  getMuscles(): Observable<MuscleCount[]> {
    return this.http.get<MuscleCount[]>('/api/muscles');
  }
}
