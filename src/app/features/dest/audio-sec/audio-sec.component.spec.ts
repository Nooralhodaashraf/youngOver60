import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioSecComponent } from './audio-sec.component';

describe('AudioSecComponent', () => {
  let component: AudioSecComponent;
  let fixture: ComponentFixture<AudioSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioSecComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AudioSecComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
