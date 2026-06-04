import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-our-heros',
  imports: [TranslatePipe],
  templateUrl: './our-heros.component.html',
  styleUrl: './our-heros.component.css',
})
export class OurHerosComponent {}
