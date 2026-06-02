import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailoredComponent } from './tailored.component';

describe('TailoredComponent', () => {
  let component: TailoredComponent;
  let fixture: ComponentFixture<TailoredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TailoredComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TailoredComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
