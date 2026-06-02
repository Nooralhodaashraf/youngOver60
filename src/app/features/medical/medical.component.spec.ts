import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalComponent } from './medical.component';

describe('MedicalComponent', () => {
  let component: MedicalComponent;
  let fixture: ComponentFixture<MedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MedicalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
