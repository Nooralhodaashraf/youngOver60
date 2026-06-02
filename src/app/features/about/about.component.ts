import { Component } from '@angular/core';
import { AboutHeroComponent } from './component/about-hero/about-hero.component';

@Component({
  selector: 'app-about',
  imports: [AboutHeroComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
