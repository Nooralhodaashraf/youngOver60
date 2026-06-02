import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTouchComponent } from './in-touch.component';

describe('InTouchComponent', () => {
  let component: InTouchComponent;
  let fixture: ComponentFixture<InTouchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InTouchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InTouchComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
