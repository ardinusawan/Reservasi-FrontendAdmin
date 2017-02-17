import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { Booking } from './booking';
import { BookingService } from './booking.service';

@Component({
  moduleId: module.id,
  selector: 'booking-details',
  templateUrl: './booking-details.component.html'
})
export class BookingDetailsComponent implements OnInit, OnDestroy {
    booking: Booking;
    sub: any;

    constructor(private bookingService: BookingService,
                private route: ActivatedRoute,
                private router: Router){
    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
          let id = Number.parseInt(params['id']);
          console.log('getting booking with id: ', id);
          this.bookingService
            .get(id)
            .subscribe(p => this.booking = p);
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    gotoBookingsList(){
        let link = ['/booking'];
        this.router.navigate(link);
    }

    saveBookingDetails(){
      this.bookingService
          .save(this.booking)
          .subscribe(
            (r: Response) => {console.log('success');}
          );
    }

  setujui(){
      this.bookingService
        .validasi(this.booking.id)
        .subscribe(
          (r: Response) => {console.log(r);}
        )
  }
}
