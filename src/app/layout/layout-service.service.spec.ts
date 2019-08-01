import { TestBed } from '@angular/core/testing';

import { LayoutServiceService } from './layout-service.service';

describe('LayoutServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: LayoutServiceService = TestBed.get(LayoutServiceService);
    expect(service).toBeTruthy();
  });
});
