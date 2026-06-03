import { Component } from '@angular/core';
import { WomenHeaderComponent } from './components/women-header/women-header.component';
import { OurHerosComponent } from './components/our-heros/our-heros.component';

@Component({
  selector: 'app-stories',
  imports: [WomenHeaderComponent, OurHerosComponent],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css',
})
export class StoriesComponent {}
