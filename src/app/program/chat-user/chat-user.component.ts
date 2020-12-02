import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['../../app.component.scss','./chat-user.component.scss'],
})
export class ChatUserComponent implements OnInit {

  constructor(public commonService: CommonService) { }
  data: any;
  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {};
    }, 1000);
  }
  ngOnInit() {}
  closeModal(){
    this.commonService.dismissModal();
  }
}
