import { Component } from '@angular/core';
import { PodcastHeroComponent } from './components/podcast-hero/podcast-hero.component';
import { PodcastListComponent } from './components/podcast-list/podcast-list.component';
import { PlayPodcastComponent } from './components/play-podcast/play-podcast.component';

@Component({
  selector: 'app-podcast',
  imports: [PodcastHeroComponent, PodcastListComponent, PlayPodcastComponent],
  templateUrl: './podcast.component.html',
  styleUrl: './podcast.component.css',
})
export class PodcastComponent {}
