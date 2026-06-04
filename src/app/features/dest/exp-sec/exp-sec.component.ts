import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-exp-sec',
  imports: [TranslatePipe],
  templateUrl: './exp-sec.component.html',
  styleUrl: './exp-sec.component.css',
})
export class ExpSecComponent {
  activeTab = 'animals';
}
