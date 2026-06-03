import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurHerosComponent } from './our-heros.component';

describe('OurHerosComponent', () => {
  let component: OurHerosComponent;
  let fixture: ComponentFixture<OurHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurHerosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OurHerosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
