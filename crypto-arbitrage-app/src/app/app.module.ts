// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppComponent } from './app.component';
import { CryptoArbitrageService } from './crypto-arbitrage.service'; // Import your service

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Include HttpClientModule here
  ],
  providers: [CryptoArbitrageService], // Provide your service
  bootstrap: [AppComponent]
})
export class AppModule { }
