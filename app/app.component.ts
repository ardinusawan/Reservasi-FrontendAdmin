import { Component } from '@angular/core';
import { BookingService } from './booking.service';

@Component({
  selector: 'my-app',
  template: `
  <h1> {{title}} </h1>
  <router-outlet>
  `,
  providers: [BookingService]
})
export class AppComponent {
  title:string = 'Reservasi Administrator LP';
}
