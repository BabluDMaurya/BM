import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, PopoverController, NavController } from '@ionic/angular';
import { HostingDropdownComponent } from '../hosting-dropdown/hosting-dropdown.component';
import { RequestedDropdownComponent } from '../requested-dropdown/requested-dropdown.component';
import { CommonService } from 'src/app/services/common.service';
import { ScheduleModalComponent } from '../schedule-modal/schedule-modal.component';
import { Config } from '../../config/config'
import { ProgramService } from './../../services/program.service';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { CalendarModule } from "ion2-calendar";

@Component({
  selector: 'app-program',
  templateUrl: './program.page.html',
  styleUrls: ['../../app.component.scss', './program.page.scss'],
})

export class ProgramPage implements OnInit {  
  @ViewChild(CalendarComponent, {static: false }) myCal: CalendarComponent;

  eventSource = [];
  currentHrs: any;
  viewTitle;
  calendar = {
    mode: 'week',
    currentDate: new Date(),
  };
  classVariable :any = 0;
  myDate: any = new Date().toISOString();
  url: any = Config.ApiUrl;
  data: any;
  programTabs: any;
  accTabData: any;
  reqTabData: any;
  pgCount : any = 0;  
  notShowAll : boolean = true;
  tabs(ev: any) {
    this.programTabs = ev.detail.value;
  } 
  userData: any;
  showAll: any;
  programList: any;
  scheduleList : any;
  allScheduleList: any;
  accProgramList: any;
  reqProgramList: any;
  allProgramList: any;
  weekLayout:any = "";
  dayDate : any = [];  
  currentDate : any;
  clickActiveClass : any = '';
  noScheduleList : boolean = false;
  noAllScheduleList : boolean = false;

  noReqProgramList : boolean = false;
  public items: any = [];
  @ViewChild('mySlider', { static: true }) slides: IonSlides;
  sliderOpts = {
    zoom: false,
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 5,
  }
  constructor(public popoverController: PopoverController,
    public navCtrl: NavController,
    public commonService: CommonService,
    private programService: ProgramService) {
      let d = new Date();
    this.currentHrs = d.getHours();
    this.items = [
      { expanded: false },
    ]; 
  }
  slidePrev(slides) {
    this.slides.slidePrev();
  }
  slideNext(slides) {
    this.slides.slideNext();
  }
  
  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    if (this.userData.user_type) {
      this.programTabs = 'schedule';
    } else {
      this.programTabs = 'attending'
    }
    
    this.myCalender();
   
    
  }
  // My calender
   getWeek(fromDate) {
    var sunday = new Date(fromDate.setDate(fromDate.getDate() - fromDate.getDay())),
      result = [new Date(sunday)];
    while (sunday.setDate(sunday.getDate() + 1) && sunday.getDay() !== 0) {
      result.push(new Date(sunday));
    }
    return result;
  }
  // getDaysInMonth(month :any , year:any) {
  //   var date : any = new Date(year, month, 1);
  //   var days : any = [];
  //   while (date.getMonth() === month) {
  //     days.push(new Date(date));
  //     date.setDate(date.getDate() + 1);
  //   }
  //   return months = days;
  // }
  // getYear() {
  //   var mthLayout = ""
  //   for (var i = 0; months.length > i; i++) {
  //     var data = months[i];
  //     mthLayout = mthLayout + "<li>" + data + "</li>";
  //   }
    // if($('.calendar').length > 0){
    //  $('.calendar ul').remove(); $('.calendar').append("<ul>" + mthLayout + "</ul>");
    // } else {
    //   $('.calendar').append("<ul>" + mthLayout + "</ul>");
    // }
    
  // }
  onTimeSelected(event) {
    console.log(event);
    this.programService.getAllSelectedUpcomingPrograms({ 'sortDate': event.selectedTime.toUTCString() }).subscribe(data => {
      console.log(data);
      this.allScheduleList = data.data.filter(el => {
        if (el.image_path) {
          el.img_arr = el.image_path.split(',');
        }
        el.expanded = false;
        el.converted = new Date(el.program_date + 'Z');
        return el;
      });
      this.pgCount = this.allScheduleList.length;
      this.commonService.dismissLoader();
      if(this.allScheduleList.length < 1){
        this.noAllScheduleList = true;
      } 
    },
    err=> {
      this.commonService.presentToast("Couldnt load data, Something went wrong.");
      this.commonService.dismissLoader();
      if(this.allScheduleList.length < 1){
        this.noAllScheduleList = true;
      }  
    });
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
  next() {
    // let swiper = document.querySelector('.swiper-container')['swiper'];
    // swiper.slideNext();
    console.log('hello' + this.myCal)
    this.myCal.slideNext();
    // this.slides.slideNext();
  }

  back() {
    
    // let swiper = document.querySelector('.swiper-container')['swiper'];
    // swiper.slidePrev();
    this.myCal.slidePrev();  
  }
  myCalender(){
    var today : any = new Date();
    var dd : any = today.getDate();
    var mm : any = today.getMonth() + 1; //January is 0!
    var yyyy : any = today.getFullYear();
    
    if (dd < 10) {
      dd = '0' + dd
    }    
    if (mm < 10) {
      mm = '0' + mm
    }    
    today = mm + '/' + dd + '/' + yyyy;
    var week = this.getWeek(new Date(today)); 
    this.currentDate = new Date(today).getDate();   
    
    var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";
    for (var i = 0; week.length > i; i++) {
      var date = new Date(week[i]).getDate();
      if(this.currentDate == date){
        var addClass = 'active';
        var addDisableClass = 0;        
      }else if(this.currentDate > date){
        var addClass = '';
        var addDisableClass = 1;
      }else{
        var addDisableClass = 0;
        var addClass = '';
      }
      this.dayDate.push( { "day": weekday[week[i].getDay()], "date":  date, 'activeClass' : addClass,'myDate':week[i],'disableClass':addDisableClass} );
    } 
    var months = "";
    var cal = false;
    
    
    
    // $('a#mth').click(function(e) {
    //  if(cal == false){
    //   cal = true;
    //   this.getDaysInMonth(4, 2017);
    //   console.log(months);
    //   getYear();
    //   } else {
    //   cal = false;
       
    // $('.calendar ul').remove(); $('.calendar').append("<ul>" + weekLayout + "</ul>");
    //   }
    //   e.preventDefault();
    // });


  }
  onChange(event) {     
    this.noScheduleList = false;
    if (this.showAll) {
      this.commonService.presentLoader();
      this.notShowAll = false;
      this.programService.getAllUpcomingPrograms(null).subscribe(data => {
        this.allProgramList = data.data.filter(el => {
          if (el.image_path) {
            el.img_arr = el.image_path.split(',');
          }
          el.converted = new Date(el.program_date + 'Z');
          el.expanded = false;
          return el;
        });
        const resultArray= [];
        let progIdList=[];
        this.allProgramList.forEach(function(item , i ){
           if(item.repeate_status==2)
           {
            resultArray.push(item);
           }else{
                if(item.repeate_status==1)
                {
                    resultArray.push(item);
                    progIdList.push(item.id);
                }else{
                    if(!progIdList.includes(item.parent_program))
                    {
                        resultArray.push(item);
                        progIdList.push(item.parent_program);
                    }
                }
           }
          
        });
        console.log(this.allProgramList)
        this.commonService.dismissLoader();
        this.pgCount = resultArray.length;
        this.commonService.presentToast("All upcoming programs listed");
        if(this.pgCount < 1){
          this.noScheduleList = true;
        }
      },
      err=>{        
      this.commonService.dismissLoader();
      this.commonService.presentToast("Couldnt load data, Something went wrong.");
      if(this.pgCount < 1){
        this.noScheduleList = true;
      }
      })  
    } else {
      this.commonService.dismissLoader();
      this.notShowAll = true;
      this.allProgramList = null;
      this.pgCount = this.scheduleList.length;
      this.noAllScheduleList = false;
      if(this.pgCount < 1){
        this.noScheduleList = true;
      }
    } 
  }
  ionViewWillEnter() {

    this.accTabData = {
      'tab': 1,
      'date': this.myDate
    }
    this.reqTabData = {
      'tab': 2,
      'date': this.myDate
    }
    let events = [];
    events.push({
      allDay: false,
    });
  
  this.eventSource = (events);
    // this.programService.getHostedPrograms(null).subscribe(data => {
    //   this.programList = data.programList.filter(el => {
    //     if (el.image_path) {
    //       el.img_arr = el.image_path.split(',');
    //     }
    //     el.converted = new Date(el.program_date + 'Z');
    //     el.expanded = false;
    //     return el;
    //   });      
    // },
    // err=> {
    //   this.commonService.presentToast("Couldnt load data, Something went wrong.")
    // }
    // );
    this.commonService.presentLoader();
    this.programService.getRequestedPrograms(null).subscribe(data => {
      this.reqProgramList = data.list.filter(el => {
        if (el.image_path) {
          el.img_arr = el.image_path.split(',');
        }
        el.converted = new Date(el.program_date + 'Z');
        el.expanded = false;
        return el;
      },
      err=> {
        this.commonService.presentToast("Couldnt load data, Something went wrong.")
      });  
      this.commonService.dismissLoader();
      if(this.reqProgramList.length < 1){
        this.noReqProgramList = true;
      }    
    },
    err=> {
      this.commonService.presentToast("Couldnt load data, Something went wrong.");
      this.commonService.dismissLoader();
      if(this.reqProgramList.length < 1){
        this.noReqProgramList = true;
      }  
    });

    this.programService.getSchedulePrograms(null).subscribe(data => {
      this.scheduleList = data.programList.filter(el => {
        if (el.image_path) {
          el.img_arr = el.image_path.split(',');
        }
        el.converted = new Date(el.program_date + 'Z');
        el.expanded = false;
        return el;
      });
      this.pgCount = this.scheduleList.length;
      this.commonService.dismissLoader();
      if(this.pgCount < 1){
        this.noScheduleList = true;
      }
    },
    err=> {
      this.commonService.presentToast("Couldnt load data, Something went wrong.");
      this.commonService.dismissLoader();
      if(this.pgCount < 1){
        this.noScheduleList = true;
      }
    }
    );

    // this.programService.getAcceptedPrograms(null).subscribe(data => {
    //   if(data.list != null){
    //   this.accProgramList = data.list.filter(el => {
    //     if (el.image_path) {
    //       el.img_arr = el.image_path.split(',');
    //     }
    //     el.converted = new Date(el.program_date + 'Z');
    //     el.expanded = false;
    //     return el;
    //   });
    // }
    // },
    // err=> {
    //   this.commonService.presentToast("Couldnt load data, Something went wrong.")
    // }
    // );
  }

  async hostingDropdown(ev: any) {
    const popover = await this.popoverController.create({
      component: HostingDropdownComponent,
      componentProps: {
        "id": ev,
        "user_type": this.userData.user_type,
      },
      translucent: false,
      cssClass: 'dropdown-menu'
    });
    popover.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.ionViewWillEnter();
      }
    });
    return await popover.present();
  }

  goBack() {
    this.commonService.dismissLoader();
    this.navCtrl.back();
  }
  showSchedule(event) { 
    this.commonService.presentModal(ScheduleModalComponent, 'fullModal', { 'programDetail': event,'user_type': this.userData.user_type });
  }
  cloneProg: any;
  expandItem(item, type, index): void {
    
    let id;
    if (item.parent_program) {
      id = item.parent_program;
    } else {
      id = item.id;
    } 
    if (item.expanded) {
      item.expanded = false;
      this.classVariable = -index;
    } else { 
      this.programService.getProgramById({ 'parentId': id }).subscribe(data => {
        this.cloneProg = data.cloneList.filter(el => {
          el.converted = new Date(el.program_date + 'Z');
          return el;
        });
      }); 
      if (type == 1) {
        this.programList.map(listItem => {
          if (item == listItem) {
            listItem.expanded = !listItem.expanded;
            this.classVariable = index;
          } else {
            listItem.expanded = false;
            this.classVariable = -index;
          }
          return listItem;
        });
      } else if (type == 2) { 
        this.accProgramList.map(listItem => {
          if (item == listItem) {
            listItem.expanded = !listItem.expanded;
            this.classVariable = index;
          } else {
            listItem.expanded = false;
            this.classVariable = -index;
          }
          return listItem;
        });
      } else if (type == 3) {
        this.reqProgramList.map(listItem => {
          if (item == listItem) {
            listItem.expanded = !listItem.expanded;
            this.classVariable = index;
          } else {
            listItem.expanded = false;
            this.classVariable = -index;
          }
          return listItem;
        });
      }else if (type == 4) {
        this.allProgramList.map(listItem => {
          if (item == listItem) {
            listItem.expanded = !listItem.expanded;
            this.classVariable = index;
          } else {
            listItem.expanded = false;
            this.classVariable = -index;
          }
          return listItem;
        });
      } 
    }
  }

  mySortDate(selectedDate : any,index) { 
    console.log(index + 'index val');
    
    this.dayDate.forEach(function(item , i ){
      console.log(i + 'i');
      if(i == index){
        item.activeClass = 'active sc-ion-label-md-h sc-ion-label-md-s md hydrated';
      }else{
        item.activeClass = 'sc-ion-label-md-h sc-ion-label-md-s md hydrated';
      }
    });
    this.commonService.presentLoader(); 
    this.noScheduleList = false;
    this.noReqProgramList = false;   
    var today = new Date();
    let userZoneDate = new Date(selectedDate);
    userZoneDate.setHours(today.getHours(), today.getMinutes(), today.getSeconds());
    console.log(userZoneDate);
    console.log(userZoneDate.toUTCString());

    this.programService.getSchedulePrograms({ 'sortDate': userZoneDate.toUTCString() }).subscribe(data => {
      this.scheduleList = data.programList.filter(el => {
        if (el.image_path) {
          el.img_arr = el.image_path.split(',');
        }
        el.expanded = false;
        el.converted = new Date(el.program_date + 'Z');
        return el;
      });
      this.pgCount = this.scheduleList.length;
      this.commonService.dismissLoader();
      console.log(this.pgCount , 'count');
      if(this.scheduleList.length < 1){
        this.noScheduleList = true;
        // this.noAllScheduleList = true;
      } 
    },
    err=> {
      this.commonService.presentToast("Couldnt load data, Something went wrong.");
      this.commonService.dismissLoader();
      if(this.scheduleList.length < 1){
        this.noScheduleList = true;
      }  
    });

    this.programService.getRequestedPrograms({ 'sortDate': userZoneDate.toUTCString() }).subscribe(data => {
      this.reqProgramList = data.list.filter(el => {
        if (el.image_path) {
          el.img_arr = el.image_path.split(',');
        }
        el.expanded = false;
        el.converted = new Date(el.program_date + 'Z');
        return el;
      });
      this.commonService.dismissLoader();
      if(this.reqProgramList.length < 1){
        this.noReqProgramList = true;
      } 
    },
    err=> {
      this.commonService.presentToast("Couldnt load data, Something went wrong.");
      this.commonService.dismissLoader();
      if(this.reqProgramList.length < 1){
        this.noReqProgramList = true;
      }  
    });
  } 

  sortDate(ev) {     
    let userZoneDate = new Date(this.myDate); 

    let temp = userZoneDate.setHours(0, 0, 0); 
    this.programService.getHostedPrograms({ 'sortDate': userZoneDate.toUTCString() }).subscribe(data => {
      this.programList = data.programList.filter(el => {
        if (el.image_path) {
          el.img_arr = el.image_path.split(',');
        }
        el.expanded = false;
        el.converted = new Date(el.program_date + 'Z');
        return el;
      });
    });

    this.programService.getRequestedPrograms({ 'sortDate': userZoneDate.toUTCString() }).subscribe(data => {
      this.reqProgramList = data.list.filter(el => {
        if (el.image_path) {
          el.img_arr = el.image_path.split(',');
        }
        el.expanded = false;
        el.converted = new Date(el.program_date + 'Z');
        return el;

      });
    });

    this.programService.getAcceptedPrograms({ 'sortDate': userZoneDate.toUTCString() }).subscribe(data => {
      this.accProgramList = data.list.filter(el => {
        if (el.image_path) {
          el.img_arr = el.image_path.split(',');
        }
        el.expanded = false;
        el.converted = new Date(el.program_date + 'Z');
        return el;
      });
    });
  }

  async requestDropdown(ev: any) {
    const popover = await this.popoverController.create({
      component: RequestedDropdownComponent,
      componentProps: {
        "id": ev,
        "user_type": this.userData.user_type,
      },
      translucent: false,
      cssClass: 'dropdown-menu'
    });
    popover.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.ionViewWillEnter();
      }
    });
    return await popover.present();
  }
  tostmess(){
    this.commonService.presentToast('Past date program not allowed');
  }

}
