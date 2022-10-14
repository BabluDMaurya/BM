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
  progEndTime:any;
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
    // this.pretime = this.preCalendarData.getMinutes() + parseInt(this.progDuration)
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
        + '<br>Invitation Type: ' + event.participant,
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
    // console.log(new Date());
    
    let cEvent = event.selectedTime;
   
    if ((cEvent.getDate() < (new Date().getDate()) && cEvent.getMonth() <= (new Date().getMonth())) || cEvent.getMonth() < (new Date().getMonth())){
      this.commonService.presentToast('Sorry, this is past time');
     
      return;
    }
    this.minutes = this.navParams.data.minutes;
    this.noEvent = true;
    this.eventList = event;
    var nd = new Date(event.selectedTime + 'Z');
    // console.log(this.calendarData);
    this.mainHours = this.calendarData;
    let hourspan = this.mainHours;
    this.durTime = this.preCalendarData;
    // this.durTime.setMinutes(this.pretime);
    // this.durTime.setMinutes(this.durTime.getMinutes() + parseInt(this.progDuration));
    // console.log(this.durTime + 'dur');
    hourspan.setMinutes(parseInt(this.minutes));
    this.dateObj = new Date(event.selectedTime + 'Z');
    
    nd.setHours((hourspan.getHours()),  parseInt(this.minutes)+parseInt(this.progDuration));
    this.progEndTime = nd;
    this.dateObj.setHours((hourspan.getHours()),  parseInt(this.minutes));
    // nd.setMinutes(nd.getMinutes() + parseInt(this.progDuration));
    console.log(this.progEndTime + ' end time');
    // console.log(this.dateObj + 'click date');
    // console.log(this.dateObj.getTime());
    // console.log(this.mainHours + 'pre selet');
    // console.log(this.mainHours.getTime());
    if(event.events.length > 0){
      event.events.forEach(el => {
        if (el.startTime.getHours() == hourspan.getHours() || el.endTime.getHours() == hourspan.getHours()) {
          // console.log(el.startTime);
          // console.log(el.startTime);
          // console.log(el.endTime.getMinutes());
          console.log(el.startTime.getTime() + 'event time');
          // console.log(el.endTime.getTime());
          // console.log(nd.getTime());          
          // console.log(this.durTime.getTime());
          this.noEvent = false;
          if ( (el.startTime.getTime() > this.dateObj.getTime() && el.startTime.getTime() >= nd.getTime()) || (el.endTime.getTime() <= this.dateObj.getTime())) {
            console.log('start time' + this.dateObj.getTime());
            console.log('End time' + nd.getTime());
            console.log('event start time' + el.startTime.getTime());
            console.log('event end time' + el.endTime.getTime());
            this.noEvent = true;
            
          }else{
            this.selectNewTime();
          }
      }
      });
    }else {
      this.noEvent = true;
    }

    if(this.noEvent == true){
      
      this.repetatedDateCopy.forEach(el => {
        // console.log(el.getDate());
        // console.log(this.dateObj.getDate());
        if(el.getDate() == this.dateObj.getDate() && el.getMonth() == this.dateObj.getMonth()){
          this.noEvent = false;
          return ;
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
    // this.dateObj = '';
    
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
          console.log(hours);
          
          this.dateObj.setMinutes(hours);
          console.log(this.dateObj);
          console.log(this.durTime);
          // var newEndTime = new Date(this.eventList.selectedTime + 'Z');
          this.progEndTime.setHours((this.mainHours.getHours()),  parseInt(hours)+parseInt(this.progDuration));
          console.log(this.progEndTime);
          console.log('fffffffffffffffffff');
          this.eventList.events.forEach(el => {
            if (el.startTime.getHours() == this.dateObj.getHours() || el.endTime.getHours() == this.dateObj.getHours()) {
              
              console.log(el.startTime.getTime());
              console.log(el.endTime.getTime());
              console.log(this.dateObj.getTime());          
       
            if ((el.startTime.getTime() > this.dateObj.getTime() && el.startTime.getTime() >= this.progEndTime.getTime()) || (el.endTime.getTime() <= this.dateObj.getTime())) {  
              this.noEvent == true;
            }
            else{
              this.commonService.presentToast('this time slot already has event');
              this.noEvent = false;
            }
          }
          });
        
          this.repetatedDateCopy.forEach(el => {
            if(el.getDate() == this.dateObj.getDate()){
              this.noEvent = false;
              return ;
            }else{
              // this.noEvent = true;
            }
          });
          if(this.noEvent == true){
            this.repetatedDateCopy.push(this.dateObj);
          }
          
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
    // console.log(ev);
  }
  closeModal(data) {
    console.log(this.repetatedDateCopy);
    console.log('gg');
    this.commonService.dismissModal(this.repetatedDateCopy);
  }
  back(data) {
    this.repetatedDateCopy = [];
    this.commonService.dismissModal(this.repetatedDateCopy);
  } 
  
}
