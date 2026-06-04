import { Routes } from '@angular/router';
import { DestComponent } from './features/dest/dest.component';
import { ExperianceComponent } from './features/experiance/experiance.component';
import { PlanComponent } from './features/plan/plan.component';
import { AboutComponent } from './features/about/about.component';
import { MedicalComponent } from './features/medical/medical.component';
import { NewsComponent } from './features/news/news.component';
import { StoriesComponent } from './features/stories/stories.component';
import { PodcastComponent } from './features/podcast/podcast.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'news', pathMatch: 'full' },

  {
    path: 'destination',
    component: DestComponent,
    title: 'destenation',
  },

  { path: 'experience/:label', component: ExperianceComponent, title: 'experiance' },
  { path: 'plan', component: PlanComponent, title: 'you plans' },
  { path: 'about', component: AboutComponent, title: 'about' },
  { path: 'medical', component: MedicalComponent, title: 'medical' },
  { path: 'news', component: NewsComponent, title: 'news' },
  { path: 'stories', component: StoriesComponent, title: 'stories' },
  { path: 'podcast', component: PodcastComponent, title: 'podcast' },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'not Found page',
  },
];
