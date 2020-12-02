import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { ModalController } from '@ionic/angular';
import { RequestsModalComponent } from '../requests-modal/requests-modal.component';
import { Config } from './../../config/config';
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
  constructor(private dataService: ChatService,public modalController: ModalController) { }  

  ngOnInit() {
    this.setFilteredItems();
    this.dataService.chatUserList().subscribe(
      (data: any) => {
        this.items = data.chatlist;
          console.log("DATA:" + JSON.stringify(data.chatlist));
      });
  }
  ionViewDidLoad(){
    
  }
  chatRoom(receiverID:any){
    console.log("receiverID:"+receiverID);
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
