import { Component, OnInit } from '@angular/core';
import { GroupusersModalComponent } from '../groupusers-modal/groupusers-modal.component';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.page.html',
  styleUrls: ['../../app.component.scss','./add-group.page.scss'],
})
export class AddGroupPage implements OnInit {

  constructor(public commonService: CommonService) { }
  groupTabs:string='programs';
  groupChanged(ev: any) {
    this.groupTabs=ev.detail.value;   
  }
  ngOnInit() {
  }
  data: any;
  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
      };
    }, 1000);
  }
  showProgramGroup(){
    this.commonService.presentModal(GroupusersModalComponent,'halfModal','');
  }
}
