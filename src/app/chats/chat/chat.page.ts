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

  url : any = Config.profilePic;
  personList: any = null;
  token: any;
  requestCount: any = 0;
  constructor(
    public commonService:CommonService,
    private router:Router,
    private dataService: ChatService,
    public modalController: ModalController) { }  

  ngOnInit() {
    this.commonService.presentLoader();
    this.setFilteredItems();
    //--------requests counter-----
    this.dataService.requestsUserListCount().subscribe((data:any)=>{
      if (data.count > 0){
        this.requestCount = data.count;
      }
      this.commonService.dismissLoader();
    });
    //------------chat user list -------------
    this.dataService.chatUserList().subscribe(
      (data: any) => {
        this.items = data.chatlist;          
          this.commonService.dismissLoader();
      });
  }
  ionViewDidLoad(){
    
  }
  chatRoom(receiverID:any,senderID:any){
    this.router.navigate(['/chat-room/'+receiverID+'/'+senderID]);
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
        console.log('test')
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

}
