import { Component } from '@angular/core';
import { PlanHeaderComponent } from './components/plan-header/plan-header.component';
import { NavsTabsComponent } from './components/navs-tabs/navs-tabs.component';

@Component({
  selector: 'app-plan',
  imports: [PlanHeaderComponent, NavsTabsComponent],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css',
})
export class PlanComponent {}
