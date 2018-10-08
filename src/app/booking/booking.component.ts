import { Component, OnInit } from '@angular/core';
import { Booking } from './../Booking';
import { BookingService } from "../booking.service";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers: [BookingService]
})
export class BookingComponent implements OnInit {

  books: Array<Booking>;
  constructor(private _bookingService: BookingService) { }

  ngOnInit() {
    // this._bookingService.getBookings()
    // .subscribe(resBookingData => this.books = resBookingData);
  }
  // onSubmitBooking(booking: Booking){
    //console.log(booking);
    // this._bookingService.addBookings(booking)
    //   .subscribe(resNewBooking => {
    //     this.books.push(resNewBooking);
    //   });
  // }
  // private hide: boolean = false;
  
/*  popUp(){
    window.alert("Thank You!");
    this.hide = true
  }
*/
ngForm = new FormGroup({
  name: new FormControl(),
  email: new FormControl(),
  phone: new FormControl(),
  add: new FormControl(),
  work: new FormControl()
});
}
