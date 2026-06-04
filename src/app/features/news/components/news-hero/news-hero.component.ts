import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-news-hero',
  imports: [TranslatePipe],
  templateUrl: './news-hero.component.html',
  styleUrl: './news-hero.component.css',
})
export class NewsHeroComponent {}
