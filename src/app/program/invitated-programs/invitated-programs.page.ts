import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProgramService } from './../../services/program.service';
import { CommonService } from './../../services/common.service';
import { RequestedDropdownComponent } from '../requested-dropdown/requested-dropdown.component';
import { NavController,PopoverController } from '@ionic/angular';
import { ScheduleModalComponent } from '../schedule-modal/schedule-modal.component';

@Component({
  selector: 'app-invitated-programs',
  templateUrl: './invitated-programs.page.html',
  styleUrls: ['./../../app.component.scss', './invitated-programs.page.scss'],
})
export class InvitatedProgramsPage implements OnInit {
  programList: any;
  userData: any;
  programData: any;
  myDate: any = new Date().toISOString();
  constructor(public popoverController: PopoverController,private programService: ProgramService,
    private commonService: CommonService,public navCtrl: NavController,) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    let params: any = null
    let userZoneDate = new Date(this.myDate);
    userZoneDate.setHours(0, 0, 0);
    params = { 'sortDate': userZoneDate.toUTCString() };
    console.log(userZoneDate.toUTCString());

    this.programService.getAllRequestedPrograms(params).subscribe(data => {
      console.log(data);
      this.programData = data.list.length;
      console.log(this.programData);
      this.programList = data.list.filter(el => {
        el.converted = new Date(el.program_date + 'Z');
        return el;
      });
    });
    console.log(this.programList);
  }
  ionItemViewWillEnter() {

  }
  async requestedDropdown(ev: any) {
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
        this.ngOnInit();
      }
    });
    return await popover.present();
  }
  showSchedule(event) { 
    this.commonService.presentModal(ScheduleModalComponent, 'fullModal', { 'programDetail': event,'user_type': this.userData.user_type });
  }
  goBack() {
    this.navCtrl.back();
  }
}
