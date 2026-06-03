import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsHeroComponent } from './news-hero.component';

describe('NewsHeroComponent', () => {
  let component: NewsHeroComponent;
  let fixture: ComponentFixture<NewsHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsHeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsHeroComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
