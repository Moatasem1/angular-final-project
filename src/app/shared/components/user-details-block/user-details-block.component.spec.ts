import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsBlockComponent } from './user-details-block.component';

describe('UserDetailsBlockComponent', () => {
  let component: UserDetailsBlockComponent;
  let fixture: ComponentFixture<UserDetailsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailsBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDetailsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
