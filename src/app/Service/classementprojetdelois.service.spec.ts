import { TestBed } from '@angular/core/testing';

import { ClassementprojetdeloisService } from './classementprojetdelois.service';

describe('ClassementprojetdeloisService', () => {
  let service: ClassementprojetdeloisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassementprojetdeloisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
