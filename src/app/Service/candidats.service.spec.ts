import { TestBed } from '@angular/core/testing';

import { CandidatsService } from './candidats.service';

describe('CandidatsService', () => {
  let service: CandidatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
