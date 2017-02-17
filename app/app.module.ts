import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

import { AppComponent }  from './app.component';
import { BookingListComponent } from './booking-list.component';
import { BookingDetailsComponent } from './booking-details.component';

@NgModule({
  imports: [ BrowserModule, routing, FormsModule, HttpModule],
  declarations: [ AppComponent, BookingListComponent, BookingDetailsComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
