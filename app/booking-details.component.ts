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
    person: Booking;
    sub: any;
    professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord'];

    constructor(private peopleService: BookingService,
                private route: ActivatedRoute,
                private router: Router){
    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
          let id = Number.parseInt(params['id']);
          console.log('getting person with id: ', id);
          this.peopleService
            .get(id)
            .subscribe(p => this.person = p);
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    gotoPeoplesList(){
        let link = ['/booking'];
        this.router.navigate(link);
    }

    savePersonDetails(){
      this.peopleService
          .save(this.person)
          .subscribe(
            (r: Response) => {console.log('success');}
          );
    }
}
