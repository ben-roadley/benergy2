import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ExerciseService } from './exercise';

describe('ExerciseService', () => {
  it('should GET the exercises of a muscle, encoding the name', () => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    const http = TestBed.inject(HttpTestingController);
    let result: unknown;

    TestBed.inject(ExerciseService)
      .getByMuscle('middle back')
      .subscribe((r) => (result = r));
    const req = http.expectOne(
      (r) =>
        r.url === '/catalog-api/exercise-definitions' &&
        r.params.get('primary_muscle') === 'middle back',
    );
    req.flush([]);

    expect(result).toEqual([]);
    expect(req.request.urlWithParams).toContain('primary_muscle=middle%20back');
    http.verify();
  });

  it('should GET one exercise by slug', () => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    const http = TestBed.inject(HttpTestingController);

    TestBed.inject(ExerciseService).getBySlug('3_4_Sit-Up').subscribe();

    http.expectOne('/catalog-api/exercise-definitions/3_4_Sit-Up').flush({});
    http.verify();
  });
});
