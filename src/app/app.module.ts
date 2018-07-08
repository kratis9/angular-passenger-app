import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';



import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';


@NgModule({
  imports:      [ BrowserModule, CommonModule,HttpClientModule,  PassengerDashboardModule],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
