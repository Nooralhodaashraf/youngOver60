import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-plan-header',
  imports: [TranslatePipe],
  templateUrl: './plan-header.component.html',
  styleUrl: './plan-header.component.css',
})
export class PlanHeaderComponent {}
