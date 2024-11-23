import { TestBed } from '@angular/core/testing';

import { StockOpeningService } from './stock-opening.service';

describe('StockOpeningService', () => {
  let service: StockOpeningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockOpeningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
