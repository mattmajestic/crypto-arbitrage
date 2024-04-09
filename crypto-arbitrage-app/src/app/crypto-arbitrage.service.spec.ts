import { TestBed } from '@angular/core/testing';

import { CryptoArbitrageService } from './crypto-arbitrage.service';

describe('CryptoArbitrageService', () => {
  let service: CryptoArbitrageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoArbitrageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
