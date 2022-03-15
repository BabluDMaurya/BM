import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { NavParams } from '@ionic/angular';
import { Config } from './../../config/config';
import { ProgramService }from './../../services/program.service';
import { PeopleViewService } from './../../services/people-view.service';
@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['../../app.component.scss', './participants.component.scss'],
})
export class ParticipantsComponent implements OnInit {

  participant: any;
  programDetail: any;
  request_accepted: any;
  request_recive: any;
  prog_id: any;
  profileUrl = Config.profilePic;
  userData: any = [];
  acceptedData: any = [];
  constructor(public commonService: CommonService,
    private navParams: NavParams,
    private programService:ProgramService,
    private peopleService: PeopleViewService) {

  }

  ngOnInit() {
    this.programDetail = this.navParams.data.programDetails;
    console.log(this.programDetail);
    console.log(this.programDetail.request_accepted);
    this.request_accepted = this.programDetail.request_accepted;
    this.request_recive = this.programDetail.request_accepted;
    this.prog_id = this.programDetail.id;
    this.reload(this.programDetail.request_recive);
    this.recieveUser(this.programDetail.request_accepted);
    
  }

  recieveUser(data){
    if(data != null){
      var uId = data.toString().split(',');
      console.log(uId);
      uId.forEach(el => {
        this.programService.getEachUserData({el}).subscribe((peoples: any) => {
        console.log(peoples);
        this.acceptedData.push({'image':peoples[0].bios.profile_pic,'name':peoples[0].user_name,'id':peoples[0].id});
      });
      console.log(this.acceptedData);
    });
    }
  }

  reload(data){
    this.commonService.presentLoader();
    console.log(data);
    if(data != null ){
    var uId = data.split(',');
    console.log(uId);
    
    
    uId.forEach(el => {
      this.programService.getEachUserData({el}).subscribe((peoples: any) => {
      console.log(peoples);
      this.userData.push({'image':peoples[0].bios.profile_pic,'name':peoples[0].user_name,'request_recive':data,'request_accepted':false,'id':peoples[0].id});
    });
    console.log(this.userData);
  });


  }


    this.programService.getProgramById({'programId':this.programDetail.id}).subscribe(
      data=>{
        this.programDetail = data ;
        console.log(this.programDetail);
        this.participant = this.navParams.data.userList.filter(el => {
          console.log(this.programDetail.programData.request_accepted);
          if(this.programDetail.programData.request_accepted!= null)
          {
            console.log('innnn');
            // var 
            if((this.programDetail.programData.request_accepted.split(',')).includes(el.id.toString()))
            {
              console.log('ttt')
              el.request_accepted =true;
            }
          }
          console.log(this.participant);
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
    this.programService.acceptJoinRequest({'programId':this.prog_id , 'userId':event }).subscribe(data=>{
      console.log(data);
      this.acceptedData = [];
      this.recieveUser(data.data.request_accepted);
      this.userData = [];
      this.reload(data.data.request_recive);
      
      // this.ngOnInit();

    });
    
  }
  deleteRequest(event){
    this.programService.deleteJoinRequest({'programId':this.prog_id , 'userId':event }).subscribe(data=>{
      console.log(data);
      this.userData = [];
      this.reload(data.data.request_recive);
      // this.ngOnInit();

    }); 
  }

}
