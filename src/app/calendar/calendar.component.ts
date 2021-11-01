import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  slideNext() {
    throw new Error('Method not implemented.');
  }
  slidePrev() {
    throw new Error('Method not implemented.');
  }
  loadEvents() {
    throw new Error("Method not implemented.");
  }

  constructor() { }

  ngOnInit() {}

}
