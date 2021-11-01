import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProgramService } from './../../services/program.service';
import { CommonService } from './../../services/common.service';
import { RequestedDropdownComponent } from '../requested-dropdown/requested-dropdown.component';
@Component({
  selector: 'app-invite-request',
  templateUrl: './invite-request.component.html',
  styleUrls: ['../../app.component.scss', './invite-request.component.scss'],
})
export class InviteRequestComponent implements OnInit {
  @Input() tabData: any;


  @Output() valueChange = new EventEmitter();

  programList: any;
  constructor(private programService: ProgramService,
    private commonService: CommonService) {
    console.log('sdfsdfsd');


  }

  ngOnInit() {
    console.log(this.tabData);
    let params: any = null
    if (this.tabData.tab == 2) {
      let userZoneDate = new Date(this.tabData.date);
      userZoneDate.setHours(0, 0, 0);
      params = { 'sortDate': userZoneDate.toUTCString() };
      console.log(userZoneDate);

      this.programService.getRequestedPrograms(params).subscribe(data => {
        this.programList = data.list.filter(el => {
          el.converted = new Date(el.program_date + 'Z');
          return el;
        });
      });
      
    } else {

      let userZoneDate = new Date(this.tabData.date);
      userZoneDate.setHours(0, 0, 0);
      params = { 'sortDate': userZoneDate.toUTCString() };
      console.log(userZoneDate);

      this.programService.getAcceptedPrograms(null).subscribe(data => {
        this.programList = data.list.filter(el => {
          el.converted = new Date(el.program_date + 'Z');
          return el;
        });
      });
      
    }


  }
  ionItemViewWillEnter() {

  }
  requestedDropdown(ev: any) {
    this.commonService.showPopover(RequestedDropdownComponent, 'dropdown-menu', { 'programId': ev });
  }
}
