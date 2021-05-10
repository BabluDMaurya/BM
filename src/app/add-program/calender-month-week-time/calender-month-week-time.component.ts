import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { formatDate, DatePipe } from '@angular/common';
import { ModalController, NavParams,AlertController } from '@ionic/angular';
import { CommonService } from '../../services/common.service';
import {
  CalendarComponentOptions,
  CalendarModal,
  CalendarModalOptions,
  CalendarResult
} from 'ion2-calendar';
import { exit } from 'process';

@Component({
  selector: 'app-calender-month-week-time',
  templateUrl: './calender-month-week-time.component.html',
  styleUrls: ['./calender-month-week-time.component.scss'],
})
export class CalenderMonthWeekTimeComponent implements OnInit {
  event = {
    startTime: '',
    endTime: '',
  };
  selected: any;
  dateObj:any;
  repetatedDateCopy: any= []; 
  dateMulti: string[];
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi'
  };
  onChange($event) {
    console.log($event);
  }
  noEvent: any =  true;
  programList: any ;
  calendarData: any;
  minutes: any;
  hours:any;
  minDate = new Date().toISOString();
  eventSource = [];
  viewTitle;
  calendar = {
    mode: 'month',
    pickMode: 'multi',
    currentDate: new Date(),
  };
  monthcalendar = {
    mode: 'month',
    pickMode: 'multi',
    currentDate: new Date(),
  };
  constructor(private navParams: NavParams,
  @Inject(LOCALE_ID) private locale: string,
  private alertCtrl: AlertController,public commonService: CommonService,) 
  {
    this.programList = this.navParams.data.programList; 
    this.calendarData = this.navParams.data.calendarData;
    this.eventSource = this.programList;
    this.minutes = this.navParams.data.minutes;
  }

  ngOnInit() {
    // this.repetatedDateCopy.push(this.calendarData);
  }
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
  async onEventSelected(event) {
    let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);
    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'From: ' + start
        + '<br>To: ' + end
        + '<br>Program Type: ' + event.typeID
        + '<br>Participant Type: ' + event.participant,
      buttons: ['OK'],
      cssClass: "custom-alert"
    });
    // this.commonService.dismissModal();
    alert.present();
  }
  async duplicatEvent() {
    const alert = await this.alertCtrl.create({
      header: '',
      subHeader: '',
      message: 'Program is already assign for this time slot',
      buttons: ['OK'],
      cssClass: "custom-alert"
    });
    // this.commonService.dismissModal();
    alert.present();
  }
  onDateSelected(event){
    // console.log(event);
    // console.log('ff');
  }
  onTimeSelected(event){
    console.log(event);
    this.noEvent = true;
    console.log(this.calendarData);

    let hourspan = this.calendarData;
    hourspan.setMinutes(hourspan.getMinutes() + parseInt(this.minutes));
    this.dateObj = new Date(event.selectedTime + 'Z');
    
    this.dateObj.setHours((hourspan.getHours()),  parseInt(this.minutes));
    if(event.events.length > 0){
      event.events.forEach(el => {
        if (el.startTime.getHours() == hourspan.getHours()) {
        this.noEvent = false;
        this.selectNewTime();
        }else{
        }
      });
    }else {
      this.noEvent = true;
    }

    if(this.noEvent == true){
      
      this.repetatedDateCopy.forEach(el => {
        // console.log(el.getDate());
        // console.log(this.dateObj.getDate());
        if(el.getDate() == this.dateObj.getDate()){
          this.noEvent = false;
          return false;
        }else{
          // this.noEvent = true;
        }
      });
      
      if(this.noEvent == true){
        // console.log(this.noEvent);
        this.repetatedDateCopy.push(this.dateObj);
      }
    }
    
  }

  selectNewTime() {
    
     
    let arr = [];
    var hrs = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14'];
    for (let i = 1; i <= 23; i++) {
      
      arr.push({ text: i, value: i });
    } 
    
    const defaultColumnOptions = [
      {
        name: 'Hours',
        options:arr
        
      }
    ];
    const buttons = [
      {
        text: 'Program is already assign for this time slot, Select new hour ' ,
        cssClass: 'timeHeading'
      },
      {
        text: 'Cancel',
        role: 'cancel'
      },
      
      {
        text: 'Confirm',
        handler: (value) => { 
          this.noEvent = true;
          var hours = value.Hours.value;
          // console.log(this.hours);
          this.dateObj.setHours((hours),  parseInt(this.minutes));
          this.repetatedDateCopy.forEach(el => {
            // console.log(el.getDate());
            // console.log(this.dateObj.getDate());
            if(el.getDate() == this.dateObj.getDate()){
              this.noEvent = false;
              return false;
            }else{
              // this.noEvent = true;
            }
          });
          this.repetatedDateCopy.push(this.dateObj);
          hours  = '';
         
        }
      }
    ]
    
      this.commonService.presentItemPicker(defaultColumnOptions, buttons);
    
  }

  preRemovedate(index) {
    this.repetatedDateCopy.splice(index, 1);
  }
  onCurrentDatechanged(ev){
    console.log(ev);
  }
  closeModal(data) {
    this.commonService.dismissModal(this.repetatedDateCopy);
  }
  
  
}
