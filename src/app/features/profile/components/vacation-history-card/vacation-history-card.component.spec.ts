import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationHistoryCardComponent } from './vacation-history-card.component';

describe('VacationHistoryCardComponent', () => {
  let component: VacationHistoryCardComponent;
  let fixture: ComponentFixture<VacationHistoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationHistoryCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationHistoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
