import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-podcast-list',
  imports: [TranslatePipe],
  templateUrl: './podcast-list.component.html',
  styleUrl: './podcast-list.component.css',
})
export class PodcastListComponent {}
