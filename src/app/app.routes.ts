import { Routes } from '@angular/router';
import { DestComponent } from './features/dest/dest.component';
import { ExperianceComponent } from './features/experiance/experiance.component';
import { PlanComponent } from './features/plan/plan.component';
import { AboutComponent } from './features/about/about.component';
import { MedicalComponent } from './features/medical/medical.component';

export const routes: Routes = [
  { path: '', redirectTo: 'destanation', pathMatch: 'full' },

  {
    path: 'destanation',
    component: DestComponent,
    title: 'destenation',
  },

  { path: 'experiance', component: ExperianceComponent, title: 'experiance' },
  { path: 'plan', component: PlanComponent, title: 'you plans' },
  { path: 'about', component: AboutComponent, title: 'about' },
  { path: 'medical', component: MedicalComponent, title: 'medical' },
];
