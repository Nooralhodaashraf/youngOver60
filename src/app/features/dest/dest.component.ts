import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { TailoredComponent } from './tailored/tailored.component';
import { YourPlanComponent } from './your-plan/your-plan.component';

@Component({
  selector: 'app-dest',
  imports: [HeaderComponent, NewsComponent, TailoredComponent, YourPlanComponent],
  templateUrl: './dest.component.html',
  styleUrl: './dest.component.css',
})
export class DestComponent {}
