import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEmployeeDetailsComponent } from './home-employee-details.component';

describe('HomeEmployeeDetailsComponent', () => {
  let component: HomeEmployeeDetailsComponent;
  let fixture: ComponentFixture<HomeEmployeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeEmployeeDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
