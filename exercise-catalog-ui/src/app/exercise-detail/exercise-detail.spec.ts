import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { ExerciseDetail as Detail, ExerciseService } from '../exercise';
import { ExerciseDetail } from './exercise-detail';

const squat: Detail = {
  slug: 'Barbell_Squat',
  name: 'Barbell Squat',
  category: 'strength',
  force: null,
  level: 'beginner',
  mechanic: 'compound',
  equipment: 'barbell',
  primary_muscles: ['quadriceps'],
  secondary_muscles: [],
  instructions: ['Step under the bar.', 'Squat down.'],
  images: ['Barbell_Squat/0.jpg', 'Barbell_Squat/1.jpg'],
};

async function render(result: Observable<Detail>): Promise<HTMLElement> {
  TestBed.configureTestingModule({
    imports: [ExerciseDetail],
    providers: [provideRouter([]), { provide: ExerciseService, useValue: { getBySlug: () => result } }],
  });
  const fixture = TestBed.createComponent(ExerciseDetail);
  fixture.componentRef.setInput('slug', 'Barbell_Squat');
  await fixture.whenStable();
  return fixture.nativeElement as HTMLElement;
}

describe('ExerciseDetail', () => {
  it('shows every field, with placeholders for null and empty values', async () => {
    const el = await render(of(squat));

    expect(el.querySelector('h1')?.textContent).toBe('Barbell Squat');
    expect(el.querySelectorAll('img').length).toBe(2);
    expect(el.querySelector('img')?.getAttribute('src')).toContain('/exercises/Barbell_Squat/0.jpg');
    const text = el.textContent ?? '';
    for (const value of ['strength', 'beginner', 'compound', 'barbell', 'quadriceps']) {
      expect(text).toContain(value);
    }
    expect(text).toContain('Not specified'); // force is null
    expect(text).toContain('None'); // no secondary muscles
    expect(el.querySelectorAll('p-card.instructions li').length).toBe(2);
    expect(el.querySelector('dd a')?.getAttribute('href')).toBe('/muscles/quadriceps');
  });

  it('shows placeholders when there are no images or instructions', async () => {
    const el = await render(of({ ...squat, images: [], instructions: [] }));

    expect(el.querySelector('img')).toBeNull();
    expect(el.querySelector('.placeholder')).not.toBeNull();
    expect(el.textContent).toContain('No instructions.');
  });

  it('shows a not-found message on 404', async () => {
    const el = await render(throwError(() => new HttpErrorResponse({ status: 404 })));
    expect(el.textContent).toContain('Exercise not found.');
  });

  it('shows a generic error message on other failures', async () => {
    const el = await render(throwError(() => new HttpErrorResponse({ status: 500 })));
    expect(el.textContent).toContain('Could not load exercise.');
  });
});
