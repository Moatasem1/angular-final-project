import { TestBed } from '@angular/core/testing';

import { VacationHistoryService } from './vacation-history.service';

describe('VacationHistoryService', () => {
  let service: VacationHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacationHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
