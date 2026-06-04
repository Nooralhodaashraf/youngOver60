import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-destinations',
  imports: [TranslatePipe],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css',
})
export class DestinationsComponent {}
