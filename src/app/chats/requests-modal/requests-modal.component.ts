import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests-modal',
  templateUrl: './requests-modal.component.html',
  styleUrls: ['../../app.component.scss','./requests-modal.component.scss'],
})
export class RequestsModalComponent implements OnInit {

  constructor(public commonService:CommonService,
    private router:Router) { }

  ngOnInit() {}
  closeModal() {
    this.commonService.dismissModal();
  }
  
  navigate(){
    this.closeModal();
    this.router.navigate(['/chat-room']);
  }
}
