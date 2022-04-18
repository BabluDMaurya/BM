import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { ProgramService } from './../services/program.service';
import { CommonService } from 'src/app/services/common.service';
import { HostingDropdownComponent } from '../program/hosting-dropdown/hosting-dropdown.component';
import { IonSlides, PopoverController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-schedule-program',
  templateUrl: './new-schedule-program.page.html',
  styleUrls: ['./../app.component.scss', './new-schedule-program.page.scss'],
})
export class NewScheduleProgramPage implements OnInit {
  scheduleProgram: string = "program";
  scheduleList : any;
  allScheduleList: any;
  userData: any;
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  viewTitle;
  constructor(private programService : ProgramService, private commonService : CommonService,public popoverController: PopoverController,
    public navCtrl: NavController ) { 
    this.scheduleProgram = "program";
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    console.log(this.calendar.mode);
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

 
  }
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
}
