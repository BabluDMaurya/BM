import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-date-test',
  templateUrl: './date-test.page.html',
  styleUrls: ['./date-test.page.scss'],
})
export class DateTestPage implements OnInit {
  dateLoad:any;
  currentTimeZone: string;
  currentDate: string;
  currentTime: string;
  ctimezone: string;
  locationCoords: any;

  sel = 'sdfsdfsdf';
  constructor(
    

    ) {  }
  clickSub: any;

  ngOnInit() {
   

  }  
}
