import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fullImagePath: string;  
  constructor() {
    this.fullImagePath = '../../assets/images/multitask.jpg';    
    //this.fullImagePath = 'https://image.ibb.co/my1ShQ/micraa.png';        
   }
  ngOnInit() {
  }

}
