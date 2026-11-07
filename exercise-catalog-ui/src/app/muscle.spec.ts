import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { MuscleService } from './muscle';

describe('MuscleService', () => {
  it('should GET /catalog-api/muscles', () => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    const http = TestBed.inject(HttpTestingController);
    let result: unknown;

    TestBed.inject(MuscleService).getMuscles().subscribe((r) => (result = r));
    http.expectOne('/catalog-api/muscles').flush([{ name: 'biceps', count: 53 }]);

    expect(result).toEqual([{ name: 'biceps', count: 53 }]);
    http.verify();
  });
});
