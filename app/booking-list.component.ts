import { Component, OnInit } from '@angular/core';
import { Booking } from './booking';
import { BookingService } from './booking.service';

@Component({
  selector: 'booking-list',
  template: `
  <section>
    <section *ngIf="isLoading && !errorMessage">
    Loading our hyperdrives!!! Retrieving data...
    </section>
      <ul>
        <!-- this is the new syntax for ng-repeat -->
        <li *ngFor="let booking of bookings">
            <a href="#" [routerLink]="['/booking', booking.id]">
          {{booking.title}}
          </a>
        </li>
      </ul>
      <section *ngIf="errorMessage">
        {{errorMessage}}
      </section>
  </section>
  `
})
export class BookingListComponent implements OnInit{
  bookings: Booking[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private bookingService : BookingService){ }

  ngOnInit(){
    this.bookingService
      .getAll()
      .subscribe(
         /* happy path */ p => this.bookings = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */ () => this.isLoading = false);
  }
}
