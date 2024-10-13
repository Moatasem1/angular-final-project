import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEmployeeDetailsComponent } from './profile-employee-details.component';

describe('ProfileEmployeeDetailsComponent', () => {
  let component: ProfileEmployeeDetailsComponent;
  let fixture: ComponentFixture<ProfileEmployeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileEmployeeDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
