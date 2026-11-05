import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DataViewModule } from 'primeng/dataview';
import { IconFieldModule } from 'primeng/iconfield';
import { ImageModule } from 'primeng/image';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { ExerciseService } from '../exercise';
import { IMAGE_BASE_URL } from '../image-base-url';

@Component({
  imports: [
    RouterLink,
    BreadcrumbModule,
    DataViewModule,
    IconFieldModule,
    ImageModule,
    InputIconModule,
    InputTextModule,
    MessageModule,
    SkeletonModule,
    TagModule,
  ],
  selector: 'app-muscle-exercises',
  styleUrl: './muscle-exercises.css',
  templateUrl: './muscle-exercises.html',
})
export class MuscleExercises {
  private readonly exerciseService = inject(ExerciseService);

  /** Route parameter `:name`, bound by withComponentInputBinding(). */
  readonly name = input.required<string>();

  protected readonly exercises = rxResource({
    params: () => this.name(),
    stream: ({ params }) => this.exerciseService.getByMuscle(params),
  });
  protected readonly query = signal('');
  protected readonly first = signal(0);
  protected readonly failedImages = signal<ReadonlySet<string>>(new Set());
  protected readonly placeholders = Array.from({ length: 6 });
  protected readonly home: MenuItem = { label: 'Explore', routerLink: '/' };
  protected readonly crumbs = computed<MenuItem[]>(() => [{ label: this.name() }]);

  protected readonly filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    return (this.exercises.value() ?? []).filter((e) => e.name.toLowerCase().includes(q));
  });

  constructor() {
    // Back to page 1 whenever the search text changes
    effect(() => {
      this.query();
      this.first.set(0);
    });
  }

  protected imageUrl(image: string): string {
    return IMAGE_BASE_URL + image;
  }

  protected markFailed(slug: string): void {
    this.failedImages.update((s) => new Set(s).add(slug));
  }
}
