import { Component, OnInit } from '@angular/core';

import { NavController, NavParams ,PopoverController} from '@ionic/angular';
import { ProgramService } from './../../services/program.service'
@Component({
  selector: 'app-requested-dropdown',
  templateUrl: './requested-dropdown.component.html',
  styleUrls: ['../../app.component.scss','./requested-dropdown.component.scss'],
})
export class RequestedDropdownComponent implements OnInit {
  programid:any;
  user_type :any;
  constructor(private navParams: NavParams,
    private programService:ProgramService,
    private popOver:PopoverController) {
    
   }

  ngOnInit() {
    
    this.programid = this.navParams.data.id;
    this.user_type = this.navParams.data.user_type;
  }

  accept()
  {
      this.programService.acceptProgramRequest({'programId':this.programid}).subscribe(
        data=>{
          this.popOver.dismiss();
        },err=>{
          this.popOver.dismiss();
        }
      )
  }

  delete()
  {

  }
}
