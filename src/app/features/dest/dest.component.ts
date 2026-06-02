import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { TailoredComponent } from './tailored/tailored.component';
import { YourPlanComponent } from './your-plan/your-plan.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { ChroniclesComponent } from './chronicles/chronicles.component';
import { AudioSecComponent } from './audio-sec/audio-sec.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ExperianceComponent } from '../experiance/experiance.component';

@Component({
  selector: 'app-dest',
  imports: [
    HeaderComponent,
    NewsComponent,
    TailoredComponent,
    YourPlanComponent,
    DestinationsComponent,
    ChroniclesComponent,
    AudioSecComponent,
    TestimonialsComponent,
    ExperianceComponent,
  ],
  templateUrl: './dest.component.html',
  styleUrl: './dest.component.css',
})
export class DestComponent {}
