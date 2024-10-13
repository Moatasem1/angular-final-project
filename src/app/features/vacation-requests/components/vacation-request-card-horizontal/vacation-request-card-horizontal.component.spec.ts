import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationRequestCardHorizontalComponent } from './vacation-request-card-horizontal.component';

describe('VacationRequestCardHorizontalComponent', () => {
  let component: VacationRequestCardHorizontalComponent;
  let fixture: ComponentFixture<VacationRequestCardHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationRequestCardHorizontalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationRequestCardHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
