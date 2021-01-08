import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { Config } from './../../config/config';

@Component({
  selector: 'app-requests-modal',
  templateUrl: './requests-modal.component.html',
  styleUrls: ['../../app.component.scss','./requests-modal.component.scss'],
})
export class RequestsModalComponent implements OnInit {
  url : any = Config.profilePic;
  requestList : any ;
  allrequest = [];
  constructor(
    public commonService:CommonService,
    private router:Router,
    private dataService: ChatService) { }

  ngOnInit() {
    this.commonService.presentLoader();
    //--------requests counter-----
    this.dataService.requestsUserList().subscribe((data:any)=>{
      this.commonService.dismissLoader();
        this.requestList = data.requestslist;
    });
  }
  close(){
    this.commonService.dismissModal();
  }
  closeModal() {
    if(this.requestList && this.requestList != ''){ 
      this.requestList.forEach(element => {
        this.allrequest.push({'chatType':element.type,'id':element.id});
      });
      this.dataService.allRequestDecline({'allrequest':this.allrequest}).subscribe((data:any)=>{
        if(data.declienall){
          this.close();
        }
      });
      this.allrequest = [];
    }
  }
  
  navigate(id : any,senderId:any,type:any){
    this.close();
    this.router.navigate(['/access/'+id+'/'+senderId+'/'+type]);
  }
}
