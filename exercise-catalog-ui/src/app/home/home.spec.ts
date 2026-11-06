import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of, throwError } from 'rxjs';
import { Home } from './home';
import { MuscleService } from '../muscle';

async function render(getMuscles: MuscleService['getMuscles']): Promise<HTMLElement> {
  TestBed.configureTestingModule({
    imports: [Home],
    providers: [provideRouter([]), { provide: MuscleService, useValue: { getMuscles } }],
  });
  const fixture: ComponentFixture<Home> = TestBed.createComponent(Home);
  await fixture.whenStable();
  return fixture.nativeElement as HTMLElement;
}

describe('Home', () => {
  it('shows one linked card per muscle with its count', async () => {
    const el = await render(() =>
      of([
        { name: 'middle back', count: 12 },
        { name: 'biceps', count: 53 },
      ]),
    );

    const links = el.querySelectorAll('a');
    expect(el.querySelector('h1')?.textContent).toBe('Explore');
    expect(links.length).toBe(2);
    expect(links[0].getAttribute('href')).toBe('/muscles/middle%20back');
    expect(links[0].textContent).toContain('12 exercises');
  });

  it('shows a message when there are no muscles', async () => {
    const el = await render(() => of([]));
    expect(el.textContent).toContain('No muscles found.');
  });

  it('shows an error message when the request fails', async () => {
    const el = await render(() => throwError(() => new Error('boom')));
    expect(el.textContent).toContain('Could not load muscles.');
  });
});
