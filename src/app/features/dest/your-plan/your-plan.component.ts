import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-your-plan',
  imports: [TranslatePipe],
  templateUrl: './your-plan.component.html',
  styleUrl: './your-plan.component.css',
})
export class YourPlanComponent {
  activeTab = 'accommodation';
}
