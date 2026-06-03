import { Component } from '@angular/core';
import { HeroMedicalComponent } from './components/hero-medical/hero-medical.component';
import { IntroComponent } from './components/intro/intro.component';

@Component({
  selector: 'app-medical',
  imports: [HeroMedicalComponent, IntroComponent],
  templateUrl: './medical.component.html',
  styleUrl: './medical.component.css',
})
export class MedicalComponent {}
