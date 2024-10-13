import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationRequestCardColComponent } from './vacation-request-card-col.component';

describe('VacationRequestCardColComponent', () => {
  let component: VacationRequestCardColComponent;
  let fixture: ComponentFixture<VacationRequestCardColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationRequestCardColComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationRequestCardColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
