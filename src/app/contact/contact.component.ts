import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: []
})
export class ContactComponent implements OnInit {

  ngOnInit() {
    // this._contactService.getContacts()
    // .subscribe(resContactData => this.contacts = resContactData);
  }
  // onSubmitContact(contact: Contact){
  //   console.log(contact);
    // this._contactService.addContacts(contact)
    //   .subscribe(resNewContact => {
    //     this.contacts.push(resNewContact);
    //   });
    //}
  // private hide: boolean = false;

/*
  popUp(){
    //window.alert("Thank You!");
    this.hide = true
  }
*/
  // ngForm = new FormGroup({
  //   name: new FormControl(),
  //   email: new FormControl(),
  //   phone: new FormControl(),
  //   sub: new FormControl(),
  //   msg: new FormControl()
  // });
}
