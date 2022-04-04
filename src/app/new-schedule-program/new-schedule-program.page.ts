import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';

@Component({
  selector: 'app-new-schedule-program',
  templateUrl: './new-schedule-program.page.html',
  styleUrls: ['./../app.component.scss', './new-schedule-program.page.scss'],
})
export class NewScheduleProgramPage implements OnInit {
  scheduleProgram: string = "program";
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  viewTitle;
  constructor() { 
    this.scheduleProgram = "program";
  }

  ngOnInit() {
  }
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
  handleCalendarView(){
    if(this.calendar.mode == 'month'){
      this.calendar.mode = 'week';
    } else{
      this.calendar.mode = 'month';
    }
  }
}
