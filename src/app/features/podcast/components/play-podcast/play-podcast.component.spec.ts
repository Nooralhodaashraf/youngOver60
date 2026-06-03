import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayPodcastComponent } from './play-podcast.component';

describe('PlayPodcastComponent', () => {
  let component: PlayPodcastComponent;
  let fixture: ComponentFixture<PlayPodcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayPodcastComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayPodcastComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
