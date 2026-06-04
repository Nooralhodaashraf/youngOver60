import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-news',
  imports: [TranslatePipe],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewsComponent {}
