import { Component, OnInit } from '@angular/core';
import { Booking } from './../Booking';
import { FormGroup, FormControl } from '@angular/forms';
import { mailer } from "../../../mailer";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  ngOnInit() {
  }
  onSubmitBooking(booking: Booking){
/*     console.log(booking);
    mailer.mailOptions.text = booking;
    console.log(mailer.mailOptions.text,mailer.mailer);
 */    //mailer.mailer();
 }
  private hide: boolean = false;
  
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
