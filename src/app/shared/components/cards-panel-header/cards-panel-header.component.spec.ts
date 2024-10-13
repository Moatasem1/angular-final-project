import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPanelHeaderComponent } from './cards-panel-header.component';

describe('CardsPanelHeaderComponent', () => {
  let component: CardsPanelHeaderComponent;
  let fixture: ComponentFixture<CardsPanelHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsPanelHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsPanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
