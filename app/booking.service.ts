import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Booking } from './booking';

@Injectable()
export class BookingService{
  // private baseUrl: string = 'http://swapi.co/api';
  private baseUrl: string = 'http://api.lp.if.its.ac.id/api/v1';
    constructor(private http : Http){
  }

  getAll(): Observable<Booking[]>{
    let booking$ = this.http
      .get(`${this.baseUrl}/bookings`, {headers: this.getHeaders()})
      .map(mapBookings)
      .catch(handleError);
      return booking$;
  }

  get(id: number): Observable<Booking> {
    let booking$ = this.http
      .get(`${this.baseUrl}/bookings/${id}`, {headers: this.getHeaders()})
      .map(mapBooking);
      return booking$;
  }

  save(booking: Booking) : Observable<Response>{
    // this won't actually work because the StarWars API doesn't
    // is read-only. But it would look like this:
    return this.http
      .put(`${this.baseUrl}/people/${booking.id}`, JSON.stringify(booking), {headers: this.getHeaders()});
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapBookings(response:Response): Booking[]{
   // uncomment to simulate error:
   // throw new Error('ups! Force choke!');

   // The response of the API has a results
   // property with the actual results
  // console.log(response.json());
   return response.json().map(toBooking)
}

function toBooking(r:any): Booking{
  let booking = <Booking>({
    // id: extractId(r),
    // url: r.url,
    // name: r.name,
    // weight: r.mass,
    // height: r.height,
    id: r.id,
    title: r.title,
    user: r.user,
    validation_by: r.validation_by,
    type: r.type,
    description: r.description
  });
  console.log('Parsed booking:', booking);
  return booking;
}

// to avoid breaking the rest of our app
// I extract the id from the booking url
// function extractId(bookingData:any){
//   // let extractedId = bookingData.url.replace('http://swapi.co/api/people/','').replace('/','');
//   let extractedId = bookingData.mass;
//   return parseInt(extractedId);
// }

function mapBooking(response:Response): Booking{
  // toBooking looks just like in the previous example
  return toBooking(response.json());
}

// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
