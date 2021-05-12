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
import { ConditionalExpr } from '@angular/compiler';

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
  eventList: any;
  programList: any ;
  calendarData: any;
  preCalendarData:any;
  minutes: any;
  progDuration:any;
  pretime:any;
  mainHours:any;
  durTime:any;
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
    
    this.progDuration = this.navParams.data.progDuration;
    this.preCalendarData = this.navParams.data.preCalendarData;
    this.pretime = this.preCalendarData.getMinutes() + parseInt(this.progDuration)
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
    // console.log(event);
    this.minutes = this.navParams.data.minutes;
    this.noEvent = true;
    this.eventList = event;
    // console.log(this.calendarData);
    this.mainHours = this.calendarData;
    let hourspan = this.mainHours;
    this.durTime = this.preCalendarData;
    this.durTime.setMinutes(this.pretime);
    // this.durTime.setMinutes(this.durTime.getMinutes() + parseInt(this.progDuration));
    console.log(this.durTime + 'dur');
    hourspan.setMinutes(parseInt(this.minutes));
    this.dateObj = new Date(event.selectedTime + 'Z');
    
    this.dateObj.setHours((hourspan.getHours()),  parseInt(this.minutes));
    console.log(hourspan.getHours());
    if(event.events.length > 0){
      event.events.forEach(el => {
        if (el.startTime.getHours() == hourspan.getHours()) {
          // console.log(el.startTime);
          // console.log(this.durTime);
          console.log(el.endTime.getMinutes());
          console.log(el.startTime.getTime());
          console.log(this.mainHours.getTime());
          console.log(el.endTime.getTime());
          console.log(this.durTime.getTime());
          this.noEvent = false;
          // if (this.mainHours.getTime() > (el.startTime.getTime()) && this.mainHours.getTime() < (el.endTime.getTime()) ) {
          //   this.selectNewTime();
          // }else if(el.startTime.getTime() > (this.mainHours.getTime()) && el.startTime.getTime() > (this.durTime.getTime()) ){
          //   this.noEvent = true;
          // }
          if(el.startTime.getTime() > (this.mainHours.getTime()) && el.startTime.getTime() < (this.durTime.getTime())){
              this.noEvent = true;
              console.log('first');
          }else if(el.endTime.getTime() < (this.mainHours.getTime()) && el.endTime.getTime() > (this.durTime.getTime())){
              this.noEvent = true;
              console.log('second');
          }else{
            this.selectNewTime();
          }
      }
      // else{
      //   }

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
    this.minutes = '';
    this.dateObj = '';
    
  }

  selectNewTime() {
    
     
    let arr = [];
    var hrs = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14'];
    for (let i = 1; i <= 60; i++) {
      
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
        text: 'Program is already assign for this time slot, Select new minute ' ,
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
          this.dateObj.setMinutes(parseInt(hours));
          this.eventList.events.forEach(el => {
            if(el.startTime.getTime() < (this.dateObj.getTime()) && el.startTime.getTime() < (this.durTime.getTime())){
              this.noEvent = true;
              console.log('first');
          }else if(el.endTime.getTime() < (this.dateObj.getTime()) && el.endTime.getTime() > (this.durTime.getTime())){
              this.noEvent = true;
              console.log('second');
          }else{
              this.commonService.presentToast('this time slot already has event');
            }
          });
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
