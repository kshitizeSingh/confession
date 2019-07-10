import { TestBed } from '@angular/core/testing';

import { ConfessionService } from './confession.service';

describe('ConfessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfessionService = TestBed.get(ConfessionService);
    expect(service).toBeTruthy();
  });
});
