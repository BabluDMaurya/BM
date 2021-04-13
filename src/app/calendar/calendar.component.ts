import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  loadEvents() {
    throw new Error("Method not implemented.");
  }

  constructor() { }

  ngOnInit() {}

}
