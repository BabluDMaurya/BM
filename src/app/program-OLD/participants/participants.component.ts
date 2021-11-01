import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { NavParams } from '@ionic/angular';
import { Config } from './../../config/config';
import { ProgramService }from './../../services/program.service'
@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['../../app.component.scss', './participants.component.scss'],
})
export class ParticipantsComponent implements OnInit {

  participant: any;
  programDetail: any;
  profileUrl = Config.profilePic;
  constructor(public commonService: CommonService,
    private navParams: NavParams,
    private programService:ProgramService) {

  }

  ngOnInit() {
    this.programDetail = this.navParams.data.programDetails;
    console.log(this.programDetail);

    this.reload();
 
  }

  reload(){
    this.commonService.presentLoader();
    this.programService.getProgramById({'programId':this.programDetail.id}).subscribe(
      data=>{
        this.programDetail = data.programData ;

        this.participant = this.navParams.data.userList.filter(el => {
      
          if(this.programDetail.request_accepted!= null)
          {
            if((this.programDetail.request_accepted.split(',')).includes(el.id.toString()))
            {
              console.log('ttt')
              el.request_accepted =true;
            }
          }
          
          return el;
        });
        this.commonService.dismissLoader();
      },
      err=>{
        this.commonService.dismissLoader();
        this.commonService.presentToast("Couldnt load data, Something went wrong.")
      }
    );

  }
  closeModal() {
    this.commonService.dismissModal();
  }

  accept(event){
    this.programService.acceptJoinRequest({'programId':this.programDetail.id , 'userId':event }).subscribe(data=>{
      this.reload();
    });
    
  }

}
