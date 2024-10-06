import { TestBed } from '@angular/core/testing';

import { ColorSwapService } from './color-swap.service';

describe('ColorSwapService', () => {
  let service: ColorSwapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorSwapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
