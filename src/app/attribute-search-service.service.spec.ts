import { TestBed } from '@angular/core/testing';

import { AttributeSearchServiceService } from './attribute-search-service.service';

describe('AttributeSearchServiceService', () => {
  let service: AttributeSearchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttributeSearchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
