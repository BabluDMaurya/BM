import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ModalController, NavParams } from '@ionic/angular';
import { ProgramService } from './../../services/program.service';
import { AddEquipmentsComponent } from '../add-equipments/add-equipments.component';
import { VideosThumbListComponent } from '../videos-thumb-list/videos-thumb-list.component';
import { ViewVideoDetailComponent } from '../../add-program/view-video-detail/view-video-detail.component';
import { CalenderMonthWeekTimeComponent } from '../../add-program/calender-month-week-time/calender-month-week-time.component';
import { VerifyUserInfoComponent } from "../../modalContent/verify-user-info/verify-user-info.component";
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

import {
  CalendarComponentOptions,
  CalendarModal,
  CalendarModalOptions,
  CalendarResult
} from 'ion2-calendar';
import { Config } from './../../config/config';
import { exit } from 'process';
import { TermsConditionComponent } from 'src/app/modalContent/terms-condition/terms-condition.component';
@Component({
  selector: 'app-date-time-modal',
  templateUrl: './date-time-modal.component.html',
  styleUrls: ['../../app.component.scss', './date-time-modal.component.scss'],
})
export class DateTimeModalComponent implements OnInit {

  // public isDisabled = ''

  dates: Date[] = [
    new Date(),
    new Date(Date.now() + 24 * 60 * 60 * 1000),
    new Date(Date.now() + 24 * 60 * 60 * 1000 * 2)
  ];
  type: 'string';
  calendarData: any;
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi'
  };

  loginUserData: any;
  finalForm: FormGroup;
  approval_btn: any = false;
  hours: any;
  programData: any;
  duration: any;
  minutes: any = 0;
  repetative: any = '';
  dupliEntry: any = '';
  programList: any;
  repetatedDate: any = [];
  bonusDates: any = [];
  videoList: any;
  priceList: [];
  sliderOpts = {
    zoom: false,
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 1.5
  }
  // vsd = [].constructor(60);
  adData: any;
  request_approve_btn: any = false;
  storagePath: any = Config.storagePath;
  repetatedDateCopy: any = [];
  abDateSelect: any;
  selectedDateTime: any;
  totalLiveSession: any;
  totalNutritionInSession: any;
  totalVideoInSession: any;
  totalLiveAmt: any = 0;
  sendAdvRequest: any = 0;
  isDisabled: boolean = true;

  constructor(
    public commonService: CommonService,
    private programService: ProgramService,
    private navParams: NavParams,
    public modalController: ModalController,
    private fb: FormBuilder,
  ) {
    let start_arr = [];
    let end_arr = [];
    this.calendarData = new Date(this.navParams.data.calendarData);
    let hourspan = new Date(this.navParams.data.calendarData);
    this.minutes = this.navParams.data.minutes;
    this.repetatedDateCopy = this.navParams.data.repetatedDateCopy;
    this.repetatedDate = this.navParams.data.repetatedDate;
    this.duration = this.navParams.data.duration;
    hourspan.setMinutes(hourspan.getMinutes() + 59);
    this.programData = this.navParams.data.programData;
    console.log(this.programData);
    console.log(this.repetatedDateCopy);
    var i = 0;
    var totalNutri = 0;
    var totalVideo = 0;
    this.repetatedDateCopy.forEach(el => {
      if (el.is_live == true) {
        i++;
      }
      if (el.video != '') {
        totalVideo++;
      }
      if (el.nutrition_id.length > 0) {
        totalNutri++;
      }
    });
    this.totalLiveSession = i;
    this.totalNutritionInSession = totalNutri;
    this.totalVideoInSession = totalVideo;
    console.log(i, ' total live session');

    //get days name
    this.programList = this.navParams.data.programList;
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayName = new Date(this.calendarData);
    var curr_day = days[dayName.getDay()];
    var curr_date: number = dayName.getDate();
    var curr_year: number = dayName.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    var curr_month = monthNames[this.calendarData.getMonth()];
    // this.selectedDateTime = this.convert(new Date(this.calendarData))+' '+this.calendarData.getHours()+':'+this.minutes;
    let suffix = 'th',
      day = curr_date;

    if (day === 1 || day === 21 || day === 31) {
      suffix = 'st'
    } else if (day === 2 || day === 22) {
      suffix = 'nd';
    } else if (day === 3 || day === 23) {
      suffix = 'rd';
    }
    this.selectedDateTime = curr_day + ', ' + curr_date + suffix + ' ' + curr_month + ' ' + curr_year + ' ' + this.calendarData.getHours() + ':' + this.minutes;
    console.log(this.selectedDateTime);
    // ------------ S O R T I N G ---------------
    this.programList.forEach(el => {
      let startTime = new Date(el.startTime);
      let endTime = new Date(el.endTime);
      if (startTime.getTime() < hourspan.getTime()) {
        if (startTime.getTime() >= this.calendarData.getTime()) {
          start_arr.push(el);
        } else if (endTime.getTime() > this.calendarData.getTime()) {
          end_arr.push(el);
        }
      }
    });
    this.finalForm = this.fb.group({
      programFees: new FormControl('0'),
      non_live_component_fee: new FormControl('0'),
    });
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: TermsConditionComponent
    });
    return await modal.present();
  }

  //------------------ 
  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join("-");
  }
  ngOnInit() {
    this.loginUserData = JSON.parse(localStorage.getItem('userData'));

    // Get pricing list
    this.programService.getPricing().subscribe((data) => {
      this.priceList = data.pricing;
    });

  }
  //------------------ 
  ionViewWillEnter() {
    let userData = JSON.parse(localStorage.getItem('userData'));


    if (this.programData.programType == '6') {
      this.commonService.loadVideoType({ 'userId': userData.id, 'postType': 2, 'videoType': 3 }).subscribe(data => {
        this.videoList = data.posts.data;
        console.log(this.videoList);
        console.log('video ');
      });
    }
  }
  //------------------ 
  closeModal(data) {
    this.commonService.dismissModal(data);
  }
  async openCalendar() {
    const options = {
      pickMode: 'multi',
      color: 'dark',
      doneIcon: true,
      closeIcon: true
    };

    const myCalendar = await this.modalController.create({
      component: CalendarModal,
      componentProps: { options },
      cssClass: 'mbg'
    });
    myCalendar.present();
    const event: any = await myCalendar.onDidDismiss();
    const date: CalendarResult = event.data;
  }

  async basic() {

    this.repetatedDateCopy = [];
    this.repetatedDate = [];
    this.repetative = 2;
    const options: CalendarModalOptions = {
    };
    const myCalendar = await this.modalController.create({
      component: CalendarModal,
      componentProps: { options }

    });
    myCalendar.present();
    const event: any = await myCalendar.onDidDismiss();
    const date = event.data;
    if (date == null) {
      this.repetative = '';
      this.repetatedDate = [];
      this.repetatedDateCopy = [];
      this.commonService.presentToast('For Clone Program select Date otherwise it will create single program ');
    } else {
      var endDate = new Date(date.dateObj);
      var dateMove = new Date(this.calendarData);
      var currentDate = new Date(this.calendarData);
      // console.log("'date':new Date(currentDate)"+new Date(currentDate));
      while (currentDate.getTime() <= endDate.getTime()) {
        this.repetatedDateCopy.push({ 'date': new Date(currentDate), 'equipments': [], 'nutrition_id': [], 'video': '', 'description': '' });
        this.repetatedDate.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 7);
      }
    }
  }

  async multiple() {
    this.repetatedDate = [];
    this.repetatedDateCopy = [];
    this.repetative = 1;
    const options = {
      pickMode: 'multi',
      title: 'Custom Selection',
    };
    const myCalendar = await this.modalController.create({
      component: CalendarModal,
      componentProps: { options },
      cssClass: 'mbg'
    });
    myCalendar.present();
    const event: any = await myCalendar.onDidDismiss();
    console.log(event);
    const date = event.data;
    let hourspan = this.calendarData;
    hourspan.setMinutes(hourspan.getMinutes() + parseInt(this.minutes));
    if (date == null) {
      this.repetative = '';
      this.repetatedDate = [];
      this.repetatedDateCopy = []
      this.commonService.presentToast('For Repeate Program select Date otherwise it will create single program ');
    } else {
      this.repetatedDateCopy.push({ 'date': this.calendarData, 'equipments': [], 'nutrition_id': [], 'video': '', 'description': '' })
      date.sort((a, b) => a.time - b.time).forEach(el => {
        console.log(el);
        this.repetatedDateCopy.push({ 'date': el.dateObj, 'equipments': [], 'nutrition_id': [], 'video': '', 'description': '' });
        let dateObj = new Date(el.dateObj + 'Z');
        dateObj.setHours((hourspan.getHours()), hourspan.getMinutes());
        this.repetatedDate.push(dateObj);
        // console.log(this.repetatedDate);
        console.log(this.repetatedDate);
      });

    }
  }
  async newtest() {
    if (!this.duration && this.programData.programType !== '6') {
      this.commonService.presentToast('Please select Duration');
      return;
    } else {
      this.repetatedDate = [];
      this.repetatedDateCopy = [];
      this.repetative = 1;
      const options: CalendarModalOptions = {
        pickMode: 'multi',

      };
      const modal = await this.modalController.create({
        component: CalenderMonthWeekTimeComponent,
        cssClass: 'fullModal',

        componentProps: { 'minutes': this.minutes, 'programList': this.programList, 'calendarData': this.calendarData, options: options, 'progDuration': this.duration, 'preCalendarData': this.calendarData }
      });
      modal.onDidDismiss().then((data: any) => {
        console.log(data);
        if (data == null) {
          this.repetative = '';
          this.repetatedDate = [];
          this.repetatedDateCopy = []
          this.commonService.presentToast('For Repeate Program select Date otherwise it will create single program ');
        } else {
          let i = 0;
          data.data.forEach(el => {

            if (el.getDate() == this.calendarData.getDate() && el.getMonth() == this.calendarData.getMonth()) {
              i++;
            }
          });
          console.log(i + 'fgfgf');
          if (i == 0) {
            this.repetatedDateCopy.push({ 'date': this.calendarData, 'equipments': [], 'nutrition_id': [], 'video': '', 'description': '' })
          }

          data.data.forEach(el => {
            console.log(el);
            console.log('el');
            this.repetatedDateCopy.push({ 'date': el, 'equipments': [], 'nutrition_id': [], 'video': '', 'description': '' });
            this.repetatedDate.push(el);
            // this.repetatedDate.push({'date':el ,'equipments':[], 'nutrition_id':[] , 'video': '','description':''});
          });
          console.log(this.repetatedDate);
        }

      });
      return await modal.present();
    }
  }
  addExtraDay(event) {
    let val = new Date(event.detail.value);

    this.repetatedDateCopy.push({ 'date': val, 'equipments': [], 'nutrition_id': [], 'video': '', 'description': '' });
    this.abDateSelect = ''
  }
  onSubmit() {
    // if (this.programData.programType !== '6' && !this.duration) {
    //   this.commonService.presentToast('Please select Duration');
    //   return;
    // }
    if (this.programData.programType == '6') {
      let data = [];
      this.videoList.forEach(el => {
        if (el.sele == true) {
          data.push(el.id);
        }
      });
      this.programData.selectedVideo = data.toString();
      this.duration = null;

      if (data.length < 1) {
        this.commonService.presentToast('Please select video');
        return;
      }
      if (data.length > 1) {
        this.commonService.presentToast('Can not select multiple videos');
        return;
      }
      console.log(this.repetatedDateCopy);
      console.log(this.repetatedDate);
      console.log(this.repetatedDate[0].getDate());
      this.repetatedDateCopy.filter(el => {
        if (this.repetatedDate[0].getDate() != el.date.getDate()) {
          if (el.video == '') {
            this.commonService.presentToast('Please select video for repetitive program');
            exit();
            return;
          }
        }
      });


    }
    let hourspan = this.calendarData;
    console.log(hourspan);
    // hourspan.setMinutes(hourspan.getMinutes() + parseInt(this.minutes));
    this.commonService.presentLoader();

    // this.repetatedDate.filter(el => {
    //   el = el.setHours((hourspan.getHours()), hourspan.getMinutes());
    // });
    var fees = this.finalForm.value;
    this.repetative = 1;
    this.programData.progDateTime = this.repetatedDate[0];
    this.programData.progDuration = this.duration;
    this.programData.progRepetation = this.repetative;
    this.programData.repetatedDate = this.repetatedDate;
    this.programData.repetatedDateCopy = this.repetatedDateCopy;
    this.programData.programFees = fees.programFees;
    this.programData.non_live_component_fee = fees.non_live_component_fee;
    this.programData.sendAdvRequest = this.sendAdvRequest;


    console.log(this.repetatedDateCopy);
    console.log(this.repetatedDate);
    console.log(this.programData);
    console.log('this.programData');

    this.programService.insertProgram(this.programData).subscribe((data) => {
      this.commonService.dismissLoader();
      this.closeModal(data.statusDetails);
    });
  }

  async addEquipments2(event, item, i) {
    const modal = await this.modalController.create({
      component: AddEquipmentsComponent,
      cssClass: 'fullModal',
      componentProps: { "programData": item, "modelOpen": event }
    });
    modal.onDidDismiss().then((d: any) => {
      if (event == 1) {
        this.repetatedDateCopy[i].equipments = d.data.filter(Boolean);
        // this.repetatedDate[i].equipments = d.data.filter(Boolean) ;
      } else {
        this.repetatedDateCopy[i].nutrition_id = d.data.filter(Boolean);
        // this.repetatedDate[i].nutrition_id = d.data.filter(Boolean) ;
      }
      console.log(this.repetatedDateCopy);
      console.log(this.repetatedDate);
    });
    return await modal.present();
  }

  async addVideo(event, i) {
    const modal = await this.modalController.create({
      component: VideosThumbListComponent,
      cssClass: 'fullModal',
      componentProps: { 'programDetail': event }
    });
    modal.onDidDismiss().then((d: any) => {
      if (d.data) {
        this.repetatedDateCopy[i].video = d.data;
        // this.repetatedDate[i].video=d.data;
      }
    });
    return await modal.present();
  }
  sponsar_prog() {
    this.approval_btn = true;
  }
  unsponsar_prog() {
    this.approval_btn = false;
  }
  detailsUpdate($event, i) {
    // $event.detail.programId = i; 
    console.log($event.detail);
    console.log(i);
    this.repetatedDateCopy[i].description = $event.detail;
  }
  verifyUserInfoModal() {
    if (this.loginUserData.trilloMatch != 1) {
      this.commonService.presentModal(VerifyUserInfoComponent, 'fullpage', '');
    } else {

    }
  }

  applyAdvertise() {
    this.loginUserData = JSON.parse(localStorage.getItem('userData'));

    let title = "Advertise Rule";
    let msg = "<p>1. Your Video will send for verification.</p>"
      + "<p class='mb-0'>2. Once approved Video Program will be locked</p>";
    let btn = [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay');
          this.sendrequest();
        }
      }
    ];

    if (this.loginUserData.trilloMatch != 1) {
      this.commonService.presentModal(VerifyUserInfoComponent, 'fullpage', '');
    } else {
      this.commonService.presentAlert(title, msg, btn, 'custom-alert advertiseAlert');
    }
  }
  sendrequest() {
    this.commonService.presentLoader();

    if (this.programData.programType == '6') {
      this.sendAdvRequest = 1;
      this.commonService.dismissLoader();
      this.commonService.presentToast('Request Sent');

      // console.log('programId:'+this.programDetail.id);
      // this.programService.advertiseRequest({'programId':this.programData.id}).subscribe(data=>{
      //   this.adData = data.status;
      //   this.request_approve_btn = true;
      //   this.commonService.dismissLoader();
      //   this.commonService.presentToast('Request Sent');
      //   console.log(data);
      // } );
    } else {
      this.commonService.dismissLoader();
      this.commonService.presentToast('Only Video Program are eligible');
    }

  }
  async showVideoDetails(item) {

    const modal = await this.modalController.create({
      component: ViewVideoDetailComponent,
      cssClass: 'fullModal',
      componentProps: { 'details': item }

    });
    return await modal.present();
  }

  updateTotalPrice(event) {
    let price = event.target.value;
    // let amtPerMin = (price) / 60;
    this.totalLiveAmt = price * this.totalLiveSession;
    console.log(this.totalLiveAmt);
  }

  termsChecked(event) {
    if (event.target.checked == true) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

}