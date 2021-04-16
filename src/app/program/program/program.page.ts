import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, PopoverController, NavController } from '@ionic/angular';
import { HostingDropdownComponent } from '../hosting-dropdown/hosting-dropdown.component';
import { RequestedDropdownComponent } from '../requested-dropdown/requested-dropdown.component';
import { CommonService } from 'src/app/services/common.service';
import { ScheduleModalComponent } from '../schedule-modal/schedule-modal.component';
import { Config } from '../../config/config'
import { ProgramService } from './../../services/program.service';
@Component({
  selector: 'app-program',
  templateUrl: './program.page.html',
  styleUrls: ['../../app.component.scss', './program.page.scss'],
})

export class ProgramPage implements OnInit {
  classVariable :any = 0;
  myDate: any = new Date().toISOString();
  url: any = Config.ApiUrl;
  data: any;
  programTabs: any;
  accTabData: any;
  reqTabData: any;
  tabs(ev: any) {
    this.programTabs = ev.detail.value;
  } 
  userData: any;
  showAll: any;
  programList: any;
  accProgramList: any;
  reqProgramList: any;
  allProgramList: any;
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
      this.programTabs = 'hosting';
    } else {
      this.programTabs = 'attending'
    }
  }

  onChange(event) { 
    if (this.showAll) {
      this.programService.getAllUpcomingPrograms(null).subscribe(data => {
        this.allProgramList = data.data.filter(el => {
          if (el.image_path) {
            el.img_arr = el.image_path.split(',');
          }
          el.converted = new Date(el.program_date + 'Z');
          el.expanded = false;
          return el;
        });
        this.commonService.presentToast("All upcoming programs listed");
      },
      err=>{
        
      this.commonService.presentToast("Couldnt load data, Something went wrong.");
      })
    } else {
      this.allProgramList = null;
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

    this.programService.getHostedPrograms(null).subscribe(data => {
      this.programList = data.programList.filter(el => {
        if (el.image_path) {
          el.img_arr = el.image_path.split(',');
        }
        el.converted = new Date(el.program_date + 'Z');
        el.expanded = false;
        return el;
      });
    },
    err=> {
      this.commonService.presentToast("Couldnt load data, Something went wrong.")
    }
    );

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
    });

    this.programService.getAcceptedPrograms(null).subscribe(data => {
      this.accProgramList = data.list.filter(el => {
        if (el.image_path) {
          el.img_arr = el.image_path.split(',');
        }
        el.converted = new Date(el.program_date + 'Z');
        el.expanded = false;
        return el;
      });
    },
    err=> {
      this.commonService.presentToast("Couldnt load data, Something went wrong.")
    }
    );
  }

  async hostingDropdown(ev: any) {
    const popover = await this.popoverController.create({
      component: HostingDropdownComponent,
      componentProps: {
        "id": ev
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
    this.navCtrl.back();
  }
  showSchedule(event) { 
    this.commonService.presentModal(ScheduleModalComponent, 'fullModal', { 'programDetail': event });
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
        "id": ev
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
