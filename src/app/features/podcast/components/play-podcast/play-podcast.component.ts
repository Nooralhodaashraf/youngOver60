import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-play-podcast',
  imports: [TranslatePipe],
  templateUrl: './play-podcast.component.html',
  styleUrl: './play-podcast.component.css',
})
export class PlayPodcastComponent {}
