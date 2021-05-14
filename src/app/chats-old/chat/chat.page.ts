import { Component, OnInit,OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { ModalController } from '@ionic/angular';
import { RequestsModalComponent } from '../requests-modal/requests-modal.component';
import { Config } from './../../config/config';
import { CommonService } from 'src/app/services/common.service';
import { ActivatedRoute, ParamMap,Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['../../app.component.scss','./chat.page.scss'],
})
export class ChatPage implements OnInit,OnDestroy {  
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
  consultantId : any;
  type :any;
  pgroom:any;
  constructor(
    public commonService:CommonService,
    private router:Router,
    private dataService: ChatService,
    private actRoute: ActivatedRoute,
    public modalController: ModalController) {}  

  ngOnInit() {   
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      this.consultantId = params.get('consultantId');
      this.type = params.get('type');
      if(this.consultantId > 0){
        this.commonService.presentLoader();
        this.checkChatUser();
      }
    });
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
    this.commonService.dismissLoader();
  }
  ngOnDestroy() {    
    if (this.callApiv) {
      clearInterval(this.callApiv);
    }
  }
  checkChatUser(){    
    this.dataService.checkChatUser({'id':this.consultantId}).subscribe((data: any) => {      
      if(data.length > 0){
        this.chatRoom(data[0].receiverID,data[0].chatroom.room,data[0].type);
      }else{
        this.dataService.sendChatRequest({'type':this.type,'peopleSelect':[this.consultantId]}).subscribe(
          (data: any) => {
            if(data.status == 'success'){
              this.router.navigate(['/chat-room/'+data.reciverID+'/'+data.room+'/'+data.type]);
            }else{
                console.log('Somthing wrong');
            }
              this.commonService.dismissLoader();
          });
      }
    });
  }
  callApi(){    
    //------------chat user list -------------
    this.dataService.chatUserList().subscribe((data: any) => {
        this.items = data.chatlist;
        this.requestCount = data.requestcount; 
        localStorage.setItem('totalchat',data.unreadchatcount);     
      });
  }
  chatRoom(receiverID:any,room:any,type:any){
    // if (this.callApiv) {
    //   clearInterval(this.callApiv);
    // }
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
  // doRefresh(event) {
  //   this.ngOnInit();
  //   this.ionViewWillEnter();
  //   setTimeout(() => {
  //     event.target.complete();
  //   }, 2000);
  // }  
}
