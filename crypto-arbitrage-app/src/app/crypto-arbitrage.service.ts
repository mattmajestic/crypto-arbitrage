// src/app/crypto-arbitrage.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoArbitrageService {
  private apiUrl = 'http://localhost:3001/arbitrage';

  constructor(private http: HttpClient) { }

  getArbitrageData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
