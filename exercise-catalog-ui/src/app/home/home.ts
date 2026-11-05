import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { SkeletonModule } from 'primeng/skeleton';
import { MuscleService } from '../muscle';

@Component({
  imports: [RouterLink, CardModule, MessageModule, SkeletonModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private readonly muscleService = inject(MuscleService);

  protected readonly muscles = rxResource({
    stream: () => this.muscleService.getMuscles(),
  });
  protected readonly placeholders = Array.from({ length: 8 });
}
