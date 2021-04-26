import { TestBed } from '@angular/core/testing';

import { RequestProfilerService } from './request-profiler.service';

describe('RequestProfilerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestProfilerService = TestBed.get(RequestProfilerService);
    expect(service).toBeTruthy();
  });
});
