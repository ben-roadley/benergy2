import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { ExerciseService, ExerciseSummary } from '../exercise';
import { MuscleExercises } from './muscle-exercises';

function exercise(slug: string, name: string, over: Partial<ExerciseSummary> = {}): ExerciseSummary {
  return { slug, name, category: 'strength', equipment: 'barbell', level: 'beginner', image: `${slug}/0.jpg`, ...over };
}

async function render(
  result: Observable<ExerciseSummary[]>,
  muscle = 'middle back',
): Promise<{ fixture: ComponentFixture<MuscleExercises>; el: HTMLElement }> {
  TestBed.configureTestingModule({
    imports: [MuscleExercises],
    providers: [provideRouter([]), { provide: ExerciseService, useValue: { getByMuscle: () => result } }],
  });
  const fixture = TestBed.createComponent(MuscleExercises);
  fixture.componentRef.setInput('name', muscle);
  await fixture.whenStable();
  return { fixture, el: fixture.nativeElement as HTMLElement };
}

describe('MuscleExercises', () => {
  it('lists linked rows with image, name and tags, and the count in the heading', async () => {
    const { el } = await render(
      of([exercise('Row', 'Row'), exercise('Curl', 'Curl', { equipment: null, image: null })]),
    );

    const rows = el.querySelectorAll('a.row');
    expect(el.querySelector('h1')?.textContent).toBe('middle back');
    expect(el.textContent).toContain('2 exercises');
    expect(rows.length).toBe(2);
    expect(rows[0].getAttribute('href')).toBe('/exercises/Row');
    expect(rows[0].querySelector('img')?.getAttribute('src')).toContain('/exercises/Row/0.jpg');
    expect(rows[0].textContent).toContain('barbell');
    expect(rows[1].querySelector('img')).toBeNull();
    expect(rows[1].querySelector('.placeholder')).not.toBeNull();
  });

  it('filters by name as the user types', async () => {
    const { fixture, el } = await render(of([exercise('Row', 'Barbell Row'), exercise('Curl', 'Curl')]));

    const input = el.querySelector('input') as HTMLInputElement;
    input.value = 'row';
    input.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    expect(el.querySelectorAll('a.row').length).toBe(1);

    input.value = 'zzz';
    input.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    expect(el.textContent).toContain('No exercise matches your search.');
  });

  it('paginates long lists at 20 rows', async () => {
    const many = Array.from({ length: 45 }, (_, i) => exercise(`e${i}`, `Exercise ${i}`));
    const { el } = await render(of(many));
    expect(el.querySelectorAll('a.row').length).toBe(20);
  });

  it('shows a message when the muscle has no exercises', async () => {
    const { el } = await render(of([]));
    expect(el.textContent).toContain('No exercises found for this muscle.');
  });

  it('shows an error message when the request fails', async () => {
    const { el } = await render(throwError(() => new Error('boom')));
    expect(el.textContent).toContain('Could not load exercises.');
  });
});
