import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-women-header',
  imports: [TranslatePipe],
  templateUrl: './women-header.component.html',
  styleUrl: './women-header.component.css',
})
export class WomenHeaderComponent {}
