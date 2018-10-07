import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Booking } from "./Booking";

@Injectable()
export class BookingService {

  providedIn: 'root';

  private _getUrl = "/api1/bookings";
  private _postUrl = "/api1/booking";
  
  constructor(private _http: HttpClient) { }

  // getBookings(){
  //   return this._http.get(this._getUrl)
  //     .map((response: Response) => response.json());
  // }
  // addBookings(booking: Booking){
  //   let headers = new Headers({ 'Content-Type': 'application/json'});
  //   let options =  new RequestOptions({headers: headers});
  //   return this._http.post(this._postUrl, JSON.stringify(booking),options)
  //     .map((response: Response) => response.json());
  // }
}
