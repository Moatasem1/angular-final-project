import { TestBed } from '@angular/core/testing';

import { LatesNewsService } from './lates-news.service';

describe('LatesNewsService', () => {
  let service: LatesNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatesNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
