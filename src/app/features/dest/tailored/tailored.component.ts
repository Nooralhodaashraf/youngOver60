import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-tailored',
  imports: [TranslatePipe],
  templateUrl: './tailored.component.html',
  styleUrl: './tailored.component.css',
})
export class TailoredComponent {}
