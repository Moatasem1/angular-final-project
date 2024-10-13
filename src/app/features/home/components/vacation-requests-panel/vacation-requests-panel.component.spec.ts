import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationRequestsPanelComponent } from './vacation-requests-panel.component';

describe('VacationRequestsPanelComponent', () => {
  let component: VacationRequestsPanelComponent;
  let fixture: ComponentFixture<VacationRequestsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationRequestsPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationRequestsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
