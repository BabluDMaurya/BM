import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service'
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./../app.component.scss','./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  userData:any;
  userType:any;
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
    this.totalchat =JSON.parse(localStorage.getItem('totalchat'));
    this.unreadMessage();
    // this.unreadMess = setInterval(() => {
    //   this.unreadMessage(); 
    // }, 15000);
    // console.log('ion enter')
     this.userType =this.userData.user_type;
     this.commonService.footerTabHooks.next(true);
  }
ionViewDidEnter	(){
//  console.log('iionViewDidEnter')
}
ionViewWillLeave(){
  this.commonService.footerTabHooks.next(false);
  // if (this.unreadMess) {
  //   clearInterval(this.unreadMess);
  // }
}
ionViewDidLeave(){
  // console.log('ionViewWillLeave');
  this.commonService.footerTabHooks.next(false);
}
unreadMessage(){
  this.commonService.getUnreadCountMyProfile();
}
}
