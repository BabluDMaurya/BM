import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { ModalController } from '@ionic/angular';
import { RequestsModalComponent } from '../requests-modal/requests-modal.component';
import { Config } from './../../config/config';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['../../app.component.scss','./chat.page.scss'],
})
export class ChatPage implements OnInit {  
  public searchTerm: string = "";
  public items: any;
  newSearchPersonList: any = [];
  searchPersonList: any[];
  userData : any;
  url : any = Config.profilePic;
  personList: any = null;
  token: any;
  requestCount: any = 0;
  callApiv : any; 
  term = ''; 
  constructor(
    public commonService:CommonService,
    private router:Router,
    private dataService: ChatService,
    public modalController: ModalController) { }  

  ngOnInit() {
    this.commonService.presentLoader();
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.setFilteredItems();
  }
  ionViewWillEnter() {
    this.commonService.presentLoader();
    this.callApi();
    this.callApiv = setInterval(() => {
      this.callApi(); 
    }, 5000);
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
    if (this.callApiv) {
      clearInterval(this.callApiv);
    }
  }
  callApi(){    
    //------------chat user list -------------
    this.dataService.chatUserList().subscribe((data: any) => {
        this.items = data.chatlist;
        this.requestCount = data.requestcount; 
        localStorage.setItem('totalchat',this.requestCount);     
      });       
      this.commonService.dismissLoader();
  }
  chatRoom(receiverID:any,room:any,type:any){
    if (this.callApiv) {
      clearInterval(this.callApiv);
    }
    this.router.navigate(['/chat-room/'+receiverID+'/'+room+'/'+type]);
  }
  ionViewWillLeave() {
    if (this.callApiv) {
      clearInterval(this.callApiv);
    }
  }
  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);

  }
  searchChanged(peopleName) {
    const searchFind = peopleName.srcElement.value;
    

    this.personList = [];

    if (!searchFind) {
      setTimeout(function(){
        this.newSearchPersonList = [];
        console.log(this.newSearchPersonList );
      },2000);
    
        return;
    }

    this.dataService.searchQuery({ "searchQuery": searchFind }).subscribe(
        (search: any) => {
            this.newSearchPersonList = search.searchList;
            console.log(search.searchList);
        }
    )
}

  async showRequests(){
    const modal = await this.modalController.create({
      component: RequestsModalComponent
    });
    return await modal.present();
  }
  doRefresh(event) {
    this.ngOnInit();
    this.ionViewWillEnter();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
