import { Component } from '@angular/core';
import { NewsHeroComponent } from './components/news-hero/news-hero.component';
import { NewsContentComponent } from './components/news-content/news-content.component';

@Component({
  selector: 'app-news',
  imports: [NewsHeroComponent, NewsContentComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
})
export class NewsComponent {}
