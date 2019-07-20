import { TestBed } from '@angular/core/testing';

import { ArticlesServiceService } from './articles-service.service';

describe('ArticlesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticlesServiceService = TestBed.get(ArticlesServiceService);
    expect(service).toBeTruthy();
  });
});
