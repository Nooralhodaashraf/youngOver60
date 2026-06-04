import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-medical',
  imports: [TranslatePipe],
  templateUrl: './hero-medical.component.html',
  styleUrl: './hero-medical.component.css',
})
export class HeroMedicalComponent {}
