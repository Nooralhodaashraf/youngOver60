import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPlanComponent } from './your-plan.component';

describe('YourPlanComponent', () => {
  let component: YourPlanComponent;
  let fixture: ComponentFixture<YourPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourPlanComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(YourPlanComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
