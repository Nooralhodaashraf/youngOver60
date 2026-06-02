import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpSecComponent } from './exp-sec.component';

describe('ExpSecComponent', () => {
  let component: ExpSecComponent;
  let fixture: ComponentFixture<ExpSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpSecComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpSecComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
