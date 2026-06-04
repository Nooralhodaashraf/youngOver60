import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navs-tabs',
  imports: [TranslatePipe],
  templateUrl: './navs-tabs.component.html',
  styleUrl: './navs-tabs.component.css',
})
export class NavsTabsComponent {
  activeTab = 'accommodation';
}
