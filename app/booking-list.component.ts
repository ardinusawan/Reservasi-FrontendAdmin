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
        <li *ngFor="let person of people">
            <a href="#" [routerLink]="['/booking', person.id]">
          {{person.name}}
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
  people: Booking[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private bookingService : BookingService){ }

  ngOnInit(){
    this.bookingService
      .getAll()
      .subscribe(
         /* happy path */ p => this.people = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */ () => this.isLoading = false);
  }
}
