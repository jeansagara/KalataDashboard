import { TestBed } from '@angular/core/testing';

import { ProjetdeloisService } from './projetdelois.service';

describe('ProjetdeloisService', () => {
  let service: ProjetdeloisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjetdeloisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
