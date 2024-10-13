import { TestBed } from '@angular/core/testing';

import { VacationRuquestService } from './vacation-ruquest.service';

describe('VacationRuquestService', () => {
  let service: VacationRuquestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacationRuquestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
