import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  imports: [ButtonModule, CardModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly clicks = signal(0);

  protected greet(): void {
    this.clicks.update((n) => n + 1);
  }
}
