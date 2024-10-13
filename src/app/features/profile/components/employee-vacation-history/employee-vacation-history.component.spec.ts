import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeVacationHistoryComponent } from './employee-vacation-history.component';

describe('EmployeeVacationHistoryComponent', () => {
  let component: EmployeeVacationHistoryComponent;
  let fixture: ComponentFixture<EmployeeVacationHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeVacationHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeVacationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
