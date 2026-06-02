import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestComponent } from './dest.component';

describe('DestComponent', () => {
  let component: DestComponent;
  let fixture: ComponentFixture<DestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DestComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
