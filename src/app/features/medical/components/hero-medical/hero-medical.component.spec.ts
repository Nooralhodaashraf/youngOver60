import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMedicalComponent } from './hero-medical.component';

describe('HeroMedicalComponent', () => {
  let component: HeroMedicalComponent;
  let fixture: ComponentFixture<HeroMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroMedicalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroMedicalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
