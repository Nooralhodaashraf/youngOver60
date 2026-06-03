import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanHeaderComponent } from './plan-header.component';

describe('PlanHeaderComponent', () => {
  let component: PlanHeaderComponent;
  let fixture: ComponentFixture<PlanHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanHeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
