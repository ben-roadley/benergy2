import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, input, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { MessageModule } from 'primeng/message';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { ExerciseService } from '../exercise';
import { IMAGE_BASE_URL } from '../image-base-url';

@Component({
  imports: [
    RouterLink,
    BreadcrumbModule,
    CardModule,
    ImageModule,
    MessageModule,
    SkeletonModule,
    TagModule,
  ],
  selector: 'app-exercise-detail',
  styleUrl: './exercise-detail.css',
  templateUrl: './exercise-detail.html',
})
export class ExerciseDetail {
  private readonly exerciseService = inject(ExerciseService);

  /** Route parameter `:slug`, bound by withComponentInputBinding(). */
  readonly slug = input.required<string>();

  protected readonly exercise = rxResource({
    params: () => this.slug(),
    stream: ({ params }) => this.exerciseService.getBySlug(params),
  });
  protected readonly failedImages = signal<ReadonlySet<string>>(new Set());
  protected readonly home: MenuItem = { label: 'Explore', routerLink: '/' };

  protected readonly notFound = computed(() => {
    const error = this.exercise.error();
    return error instanceof HttpErrorResponse && error.status === 404;
  });

  protected readonly crumbs = computed<MenuItem[]>(() => {
    const e = this.exercise.value();
    if (!e) return [];
    const muscle = e.primary_muscles[0];
    return [
      ...(muscle ? [{ label: muscle, routerLink: ['/muscles', muscle] }] : []),
      { label: e.name },
    ];
  });

  protected imageUrl(image: string): string {
    return IMAGE_BASE_URL + image;
  }

  protected markFailed(image: string): void {
    this.failedImages.update((s) => new Set(s).add(image));
  }
}
