import { Component, OnInit ,Input} from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Router } from '@angular/router';
import { PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() receiverId: any;
  @Input() userDataid: any;
  @Input() bidOUser: any;
  @Input () bSOUser : any;
  status:any = 0;
  returnStatus:any;
  constructor(    
    private dataService: ChatService,
    private router:Router,
    public popoverController: PopoverController
    ) { }
    DismissClick(data:any) {
      this.popoverController.dismiss(data);
        }
  ngOnInit() {
    this.receiverId;
    this.userDataid;
  }
  block(){
    if(this.bSOUser=='unblock'){
        this.returnStatus = 'block';
        this.status = 1;
    }else{
      this.returnStatus = 'unblock';
      this.status = 0;
    }
  this.dataService.blockChatUser({'bidOUser':this.bidOUser,'status':this.status}).subscribe(
      (data: any) => {
        this.DismissClick(this.returnStatus);
        if(this.status == 1){
          this.router.navigate(['/tabs/chats']);
        }
      });
  }
  clear(){

  }
  delete(){
    // this.router.navigate(['/tabs/chats']);
  }
}
