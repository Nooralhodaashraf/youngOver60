import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenHeaderComponent } from './women-header.component';

describe('WomenHeaderComponent', () => {
  let component: WomenHeaderComponent;
  let fixture: ComponentFixture<WomenHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WomenHeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
