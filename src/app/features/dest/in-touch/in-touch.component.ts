import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-in-touch',
  imports: [TranslatePipe],
  templateUrl: './in-touch.component.html',
  styleUrl: './in-touch.component.css',
})
export class InTouchComponent {}
