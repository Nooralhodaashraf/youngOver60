import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-news-content',
  imports: [TranslatePipe],
  templateUrl: './news-content.component.html',
  styleUrl: './news-content.component.css',
})
export class NewsContentComponent {}
