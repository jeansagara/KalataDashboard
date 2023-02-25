import { TestBed } from '@angular/core/testing';

import { ClassementelectionService } from './classementelection.service';

describe('ClassementelectionService', () => {
  let service: ClassementelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassementelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
