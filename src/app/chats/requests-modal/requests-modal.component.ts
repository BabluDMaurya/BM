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
  closeModal() {
    this.commonService.dismissModal();
  }
  
  navigate(id : any){
    this.closeModal();
    this.router.navigate(['/access/'+id]);
  }
}
