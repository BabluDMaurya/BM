import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service'
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./../app.component.scss','./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  userData:any;
  userType:any = 0;
  totalchat:any;
  unreadMess : any;
  constructor(
    private commonService:CommonService
  ) { }

  ngOnInit() {
  }  
  openToggle(){
    document.getElementById('circularMenu').classList.toggle('active');
    document.getElementById('floting-position').classList.toggle('active');
  }
  ionViewWillEnter() {
    this.userData =JSON.parse(localStorage.getItem('userData'));
    setInterval(() => {
      this.totalchat =JSON.parse(localStorage.getItem('totalchat'));
    }, 5000);   
    this.unreadMessage();
    this.userType =this.userData.user_type;
    this.commonService.footerTabHooks.next(true);
  }
  ionViewDidEnter	(){
  }
  ionViewWillLeave(){
    this.commonService.footerTabHooks.next(false);
  }
  ionViewDidLeave(){  
    this.commonService.footerTabHooks.next(false);
  }
  unreadMessage(){
    this.commonService.getUnreadCountMyProfile();
  }
}
