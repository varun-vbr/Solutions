import { TestBed } from '@angular/core/testing';

import { SolutionsProviderService } from './solutions-provider.service';

describe('SolutionsProviderService', () => {
  let service: SolutionsProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolutionsProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
