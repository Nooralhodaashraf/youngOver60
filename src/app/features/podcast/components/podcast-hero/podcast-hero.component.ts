import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-podcast-hero',
  imports: [TranslatePipe],
  templateUrl: './podcast-hero.component.html',
  styleUrl: './podcast-hero.component.css',
})
export class PodcastHeroComponent {}
