import { Component, OnInit } from '@angular/core';
import { ModalController,PopoverController , NavParams } from '@ionic/angular';
import { ProgramService } from '../../services/program.service'
@Component({
  selector: 'app-hosting-dropdown',
  templateUrl: './hosting-dropdown.component.html',
  styleUrls: ['../../app.component.scss','./hosting-dropdown.component.scss'],
})
export class HostingDropdownComponent implements OnInit {

  programId:any;
  user_type:any;
  constructor(private modalController: ModalController,
    private navParams: NavParams,
    private programService:ProgramService,
    private popOver:PopoverController) { }

  ngOnInit() {
    this.programId = this.navParams.data.id
    this.user_type = this.navParams.data.user_type
  }

  delete()
  {
    this.programService.deleteProgram({'programId':this.programId}).subscribe(
      data=>{
        this.popOver.dismiss();
      },error=>{
        this.popOver.dismiss();
      }
    );
  }

  async closeModal()   {
    this.popOver.dismiss();
  }
}
