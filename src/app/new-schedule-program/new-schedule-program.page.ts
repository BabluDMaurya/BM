import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { ProgramService } from './../services/program.service';
import { CommonService } from 'src/app/services/common.service';
import { HostingDropdownComponent } from '../program/hosting-dropdown/hosting-dropdown.component';
import { IonSlides, PopoverController, NavController } from '@ionic/angular';
import { RequestedDropdownComponent } from '../program/requested-dropdown/requested-dropdown.component';

@Component({
  selector: 'app-new-schedule-program',
  templateUrl: './new-schedule-program.page.html',
  styleUrls: ['./../app.component.scss', './new-schedule-program.page.scss'],
})
export class NewScheduleProgramPage implements OnInit {
  scheduleProgram: string = "program";
  scheduleList : any;
  nutritionList: any;
  allScheduleList: any;
  userData: any;
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  viewTitle;
  dataLength: any;
  reqProgramList: any;
  noReqProgramList: boolean = false;
  noNutriProg: boolean = false;
  noVideoProg: boolean = false;
  noLiveProg: boolean = false;
  myDate: any = new Date().toISOString();
  videoProgList: any;
  liveProgList: any;
  constructor(private programService : ProgramService, private commonService : CommonService,public popoverController: PopoverController,
    public navCtrl: NavController ) { 
    this.scheduleProgram = "program";
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    console.log(this.calendar.mode);

    this.programService.getAllNutritionPrograms(null).subscribe(data => {
      this.nutritionList = data.programList.filter(el => {
        if (el.image_path) {
          el.img_arr = el.image_path.split(',');
        }
        el.converted = new Date(el.program_date + 'Z');
        el.expanded = false;
        return el;
      });
      if(this.nutritionList.length < 1){
        this.noNutriProg = true;
      }
      console.log(this.nutritionList);
      this.commonService.dismissLoader();
      
    },
    err=> {
      this.commonService.presentToast("Couldnt load data, Something went wrong.");
      this.commonService.dismissLoader();
      
    }
    );

    this.programService.getAllVideoPrograms(null).subscribe(data => {
      this.videoProgList = data.programList.filter(el => {
        if (el.image_path) {
          el.img_arr = el.image_path.split(',');
        }
        el.converted = new Date(el.program_date + 'Z');
        el.expanded = false;
        return el;
      });
      if(this.videoProgList.length < 1){
        this.noVideoProg = true;
      }
      console.log(this.videoProgList);
      this.commonService.dismissLoader();
      
    },
    err=> {
      this.commonService.presentToast("Couldnt load data, Something went wrong.");
      this.commonService.dismissLoader();
      
    }
    );

   

  }
  ionViewWillEnter() {
    this.programService.getSchedulePrograms(null).subscribe(data => {
      this.scheduleList = data.programList.filter(el => {
        if (el.image_path) {
          el.img_arr = el.image_path.split(',');
        }
        el.converted = new Date(el.program_date + 'Z');
        el.expanded = false;
        return el;
      });
      this.commonService.dismissLoader();
      
    },
    err=> {
      this.commonService.presentToast("Couldnt load data, Something went wrong.");
      this.commonService.dismissLoader();
      
    }
    );

    this.programService.getAllLivePrograms(null).subscribe(data => {
      this.liveProgList = data.programList.filter(el => {
        if (el.image_path) {
          el.img_arr = el.image_path.split(',');
        }
        el.converted = new Date(el.program_date + 'Z');
        el.expanded = false;
        return el;
      });
      
      if(this.liveProgList.length < 1){
        this.noLiveProg = true;
      }
      console.log(this.liveProgList);
      this.commonService.dismissLoader();
      
    },
    err=> {
      this.commonService.presentToast("Couldnt load data, Something went wrong.");
      this.commonService.dismissLoader();
      
    }
    );


    this.commonService.presentLoader();
    let params: any = null
    let userZoneDate = new Date(this.myDate);
    userZoneDate.setHours(0, 0, 0);
    params = { 'sortDate': userZoneDate.toUTCString() };
    console.log(userZoneDate.toUTCString());
    this.programService.getAllRequestedPrograms(params).subscribe(data => {
      console.log(data);
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

 
  }
  onTimeSelected(event) {
    console.log(event);
    this.programService.getAllSelectedUpcomingPrograms({ 'sortDate': event.selectedTime.toUTCString() }).subscribe(data => {
      console.log(data);
      this.dataLength = data.data.length;
      console.log(this.dataLength);
      this.allScheduleList = data.data.filter(el => {
        if (el.image_path) {
          el.img_arr = el.image_path.split(',');
        }
        el.expanded = false;
        el.converted = new Date(el.program_date + 'Z');
        return el;
      });
      this.commonService.dismissLoader();
    },
    err=> {
      this.commonService.presentToast("Couldnt load data, Something went wrong.");
      this.commonService.dismissLoader();
      
    });
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
}
