import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-chronicles',
  imports: [TranslatePipe],
  templateUrl: './chronicles.component.html',
  styleUrl: './chronicles.component.css',
})
export class ChroniclesComponent {}
