import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRequestsNumberComponent } from './leave-requests-number.component';

describe('LeaveRequestsNumberComponent', () => {
  let component: LeaveRequestsNumberComponent;
  let fixture: ComponentFixture<LeaveRequestsNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveRequestsNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeaveRequestsNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
