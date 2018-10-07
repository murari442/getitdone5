import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.css']
})
export class OurWorkComponent implements OnInit {

  fullImagePath: string;  
  constructor() { 
    this.fullImagePath = '../../assets/images/our_work.png';    
  }

  ngOnInit() {
  }

}
