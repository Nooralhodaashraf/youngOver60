import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { TailoredComponent } from './tailored/tailored.component';

@Component({
  selector: 'app-dest',
  imports: [HeaderComponent, NewsComponent, TailoredComponent],
  templateUrl: './dest.component.html',
  styleUrl: './dest.component.css',
})
export class DestComponent {}
