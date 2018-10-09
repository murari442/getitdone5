import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Contact } from "./Contact";

@Injectable()
export class ContactService {

  providedIn: 'root';

  private _getUrl = "/api/contacts";
  private _postUrl = "/api/contact";
  
  constructor(private _http: HttpClient) { }

  getContacts(){
    // return this._http.get<any>(this._getUrl)
    //   .pipe(map((response: HttpResponse<any>) => response.body()));
  }
  // addContacts(contact: Contact){
  //   let headers = new Headers({ 'Content-Type': 'application/json'});
  //   let params =  new HttpParams({headers: headers});
  //   return this._http.post(this._postUrl, JSON.stringify(contact),options)
  //     .map((response: Response) => response.json());
  // }
}
