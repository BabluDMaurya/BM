import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { ProgramService } from './../services/program.service';
import { CommonService } from 'src/app/services/common.service';
import { HostingDropdownComponent } from '../program/hosting-dropdown/hosting-dropdown.component';
import { IonSlides, PopoverController, NavController } from '@ionic/angular';
import { RequestedDropdownComponent } from '../program/requested-dropdown/requested-dropdown.component';
import { Config } from '../config/config'
import { NutritionModalComponent } from 'src/app/user-profile/nutrition-modal/nutrition-modal.component';
import { ViewVideoDetailComponent } from 'src/app/add-program/view-video-detail/view-video-detail.component';


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
  profileUrl = Config.profilePic;
  url = Config.imgUrl;
  vidUrl = Config.progVidUrl;
  videoFiltered: [];
  private _searchTerm: string;
  get videoSearchTerm(): string  {
    return this._searchTerm;
  }
  set videoSearchTerm(value: string) {
    this._searchTerm = value;
    this.videoFiltered = this.videoFilterUser(value);
  }

  nutriProgArray: [];
  private _nutriProgSearchTerm: string;
  get nutriProgSearchTerm(): string  {
    return this._nutriProgSearchTerm;
  }
  set nutriProgSearchTerm(value: string) {
    this._nutriProgSearchTerm = value;
    this.nutriProgArray = this.nutriFilterProgram(value);
  }
 
  liveProgArray: [];
  private _liveProgSearchTerm: string;
  get liveProgSearchTerm(): string  {
    return this._liveProgSearchTerm;
  }
  set liveProgSearchTerm(value: string) {
    this._liveProgSearchTerm = value;
    this.liveProgArray = this.liveFilterProgram(value);
  }

  reqProgArray: [];
  private _reqProgSearchTerm: string;
  get reqProgSearchTerm(): string  {
    return this._reqProgSearchTerm;
  }
  set reqProgSearchTerm(value: string) {
    this._reqProgSearchTerm = value;
    this.reqProgArray = this.reqFilterProgram(value);
  }

  constructor(private programService : ProgramService, private commonService : CommonService,public popoverController: PopoverController,
    public navCtrl: NavController ) { 
    this.scheduleProgram = "program";
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    console.log(this.calendar.mode);
    this.commonService.presentLoader();
    this.programService.getAllNutritionPrograms(null).subscribe(data => {
      this.nutritionList = data.programList.filter(el => {
        if (el.image_path) {
          el.img_arr = el.image_path.split(',');
        }
        el.converted = new Date(el.program_date + 'Z');
        el.expanded = false;
        return el;
      });
      this.nutriProgArray = this.nutritionList;
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
      this.videoFiltered = this.videoProgList;
      if(this.videoFiltered.length <= 0){
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

    this.programService.getAllLivePrograms(null).subscribe(data => {
      this.liveProgList = data.programList.filter(el => {
        if (el.image_path) {
          el.img_arr = el.image_path.split(',');
        }
        el.converted = new Date(el.program_date + 'Z');
        el.expanded = false;
        return el;
      });
      this.liveProgArray = this.liveProgList;
      if(this.liveProgList.length == 0){
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
      this.reqProgArray = this.reqProgramList; 
      this.commonService.dismissLoader();
      if(this.reqProgramList.length == 0){
        this.noReqProgramList = true;
      }    
    },
    err=> {
      this.commonService.presentToast("Couldnt load data, Something went wrong.");
      this.commonService.dismissLoader();
      if(this.reqProgramList.length == 0){
        this.noReqProgramList = true;
      }  
    });

  }
  videoFilterUser(searchString: string) {
    return this.nutritionList.filter(employee =>
      employee.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
  nutriFilterProgram(searchString: string) {
    return this.videoProgList.filter(employee =>
      employee.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
  liveFilterProgram(searchString: string) {
    return this.liveProgList.filter(employee =>
      employee.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
  reqFilterProgram(searchString: string) {
    return this.reqProgramList.filter(employee =>
      employee.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
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

   


    this.commonService.presentLoader();
    

 
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
        this.ngOnInit();
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
      this.ngOnInit();
      if (dataReturned !== null) {
        this.ngOnInit();
      }
    });
    return await popover.present();
  }
  async showVideoDetails(item,videoIDs){
    this.commonService.presentModal(ViewVideoDetailComponent, 'fullModal', { 'details': item, 'videoIds': videoIDs });
  }
  nutritionModal(data) {
    console.log(data);
    this.commonService.presentModal(NutritionModalComponent, 'fullModal', { 'data': data });
  }
}
