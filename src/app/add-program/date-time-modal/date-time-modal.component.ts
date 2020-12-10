import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ModalController, NavParams } from '@ionic/angular';
import { ProgramService } from './../../services/program.service';
import { AddEquipmentsComponent } from '../add-equipments/add-equipments.component';
import { VideosThumbListComponent } from '../videos-thumb-list/videos-thumb-list.component';
import {
  CalendarComponentOptions,
  CalendarModal,
  CalendarModalOptions,
  CalendarResult
} from 'ion2-calendar';
import { Config } from './../../config/config';
@Component({
  selector: 'app-date-time-modal',
  templateUrl: './date-time-modal.component.html',
  styleUrls: ['../../app.component.scss', './date-time-modal.component.scss'],
})
export class DateTimeModalComponent implements OnInit {

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
  hours: any;
  programData: any;
  duration: string;
  minutes: any = 0;
  repetative: any = '';
  programList: any;
  repetatedDate: any = [];
  bonusDates: any = [];
  videoList: any;
  sliderOpts = {
    zoom: false,
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 1.5
  }
  // vsd = [].constructor(60);
  storagePath: any = Config.storagePath;
  repetatedDateCopy: any= []; 
  abDateSelect:any;
  selectedDateTime : any;
  constructor(
    public commonService: CommonService,
    public modalCtrl: ModalController,
    private programService: ProgramService,
    private navParams: NavParams
  ) {
    let start_arr = [];
    let end_arr = [];
    this.calendarData = new Date(this.navParams.data.calendarData);
    let hourspan = new Date(this.navParams.data.calendarData);
    this.minutes = this.navParams.data.minutes;
    hourspan.setMinutes(hourspan.getMinutes() + 59);
    this.programData = this.navParams.data.programData;
    this.programList = this.navParams.data.programList; 

    this.selectedDateTime = this.convert(new Date(this.calendarData))+' '+this.calendarData.getHours()+':'+this.minutes;
    
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
    // start_arr.filter(el => {
    //   let a = el.startTime.getMinutes();
    //   let b = (el.endTime.getTime() - el.startTime.getTime()) / (1000 * 60);
    //   for (let i = 0; i <= b; i++) {
    //     this.vsd[a] = 'true';
    //     a = a + 1;
    //     if (a > 60)
    //       break;
    //   }
    // })
    // end_arr.filter(el => {
    //   let b = (el.endTime.getTime() - this.calendarData.getTime()) / (1000 * 60);
    //   for (let i = 0; i <= b; i++) {
    //     this.vsd[i] = 'true';
    //     if (i > 60)
    //       break;
    //   }
    // })
  }
  //------------------ 
  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day,mnth,date.getFullYear()].join("-");
  }
  ngOnInit() { }
  //------------------ 
  ionViewWillEnter() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    
    
    if (this.programData.programType == '6') {
      this.commonService.loadVideoType({ 'userId': userData.id, 'postType': 2, 'videoType': 3 }).subscribe(data => {
        this.videoList = data.posts.data;
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

    const myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      componentProps: { options },
      cssClass: 'mbg'
    });
    myCalendar.present();
    const event: any = await myCalendar.onDidDismiss();
    const date: CalendarResult = event.data;
  }

  async basic() {

    this.repetatedDateCopy=[];
    this.repetatedDate = [];
    this.repetative = 2;
    const options: CalendarModalOptions = { 
    };
    const myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      componentProps: { options }

    });
    myCalendar.present();
    const event: any = await myCalendar.onDidDismiss();
    const date = event.data;
    if (date == null) {
      this.repetative = '';
      this.repetatedDate = [];
      this.repetatedDateCopy=[];
      this.commonService.presentToast('For Clone Program select Date otherwise it will create single program ');
    } else {
      var endDate = new Date(date.dateObj);
      var dateMove = new Date(this.calendarData);
      var currentDate = new Date(this.calendarData); 
      // console.log("'date':new Date(currentDate)"+new Date(currentDate));
      while (currentDate.getTime() <= endDate.getTime()) {
        this.repetatedDateCopy.push({'date':new Date(currentDate) ,'equipments':[], 'nutrition_id':[] , 'video': '','description':''});
        this.repetatedDate.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 7);
      }
    }
  }

  async multiple() {
    this.repetatedDate = []; 
    this.repetatedDateCopy=[];
    this.repetative = 1;
    const options = {
      pickMode: 'multi',
      title: 'Custom Selection',
    };
    const myCalendar = await this.modalCtrl.create({
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
      this.repetatedDateCopy=[]
      this.commonService.presentToast('For Repeate Program select Date otherwise it will create single program ');
    } else {
      this.repetatedDateCopy.push({'date':this.calendarData ,'equipments':[], 'nutrition_id':[] , 'video': '','description':''})
      date.sort((a, b) => a.time - b.time).forEach(el => {
        console.log(el);
        this.repetatedDateCopy.push({'date':el.dateObj ,'equipments':[], 'nutrition_id':[] , 'video': '','description':''});
        let dateObj = new Date(el.dateObj + 'Z');
        dateObj.setHours((hourspan.getHours()), hourspan.getMinutes());
        this.repetatedDate.push(dateObj);
      });
      
    }
  }

  addExtraDay(event) {
    let val =new Date(event.detail.value);
    
    this.repetatedDateCopy.push({'date':val,'equipments':[], 'nutrition_id':[] , 'video': '','description':''}); 
    this.abDateSelect = ''
  }
  onSubmit() {
    if (this.programData.programType !== '6' && !this.duration) {
      this.commonService.presentToast('Please select Duration');
      return;
    }
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
    }
    let hourspan = this.calendarData;
    hourspan.setMinutes(hourspan.getMinutes() + parseInt(this.minutes));
    this.commonService.presentLoader();
    this.repetatedDate.filter(el => {
      el = el.setHours((hourspan.getHours()), hourspan.getMinutes());
    });
    this.programData.progDateTime = hourspan;
    this.programData.progDuration = this.duration;
    this.programData.progRepetation = this.repetative;
    this.programData.repetatedDate = this.repetatedDate;
    this.programData.repetatedDateCopy = this.repetatedDateCopy;
    this.programService.insertProgram(this.programData).subscribe((data) => {
      this.commonService.dismissLoader();
    this.closeModal(data.statusDetails);
    });
  }

  async addEquipments2(event, item, i) {
    const modal = await this.modalCtrl.create({
      component: AddEquipmentsComponent,
      cssClass: 'fullModal',
      componentProps: { "programData": item, "modelOpen": event }
    });
    modal.onDidDismiss().then((d: any) => {
      if(event == 1)
      {
        this.repetatedDateCopy[i].equipments = d.data.filter(Boolean)  ;
      }else{
        this.repetatedDateCopy[i].nutrition_id = d.data.filter(Boolean) ;
      }
      console.log(this.repetatedDateCopy);
    });
    return await modal.present();
  }

  async addVideo(event, i) {
    const modal = await this.modalCtrl.create({
      component: VideosThumbListComponent,
      cssClass: 'fullModal',
      componentProps: { 'programDetail': event }
    }); 
    modal.onDidDismiss().then((d: any) => {
      if (d.data) {
        this.repetatedDateCopy[i].video=d.data;
      }
    });
    return await modal.present();
  }

  detailsUpdate($event, programId) {
    $event.detail.programId = programId; 
  }
}