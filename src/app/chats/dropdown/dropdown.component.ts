import { Component, OnInit ,Input} from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Router } from '@angular/router';
import { PopoverController} from '@ionic/angular';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { CommonService } from '../../services/common.service';
import { NutritionService } from '../../services/nutrition.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() receiverId: any; // in group chat this is group id
  @Input() userDataid: any; // in group chat this is user id
  @Input() bidOUser: any;
  @Input() bSOUser : any;
  @Input() type : any;
  @Input() lastchatid : any;
  @Input() room : any;
  status:any = 0;
  returnStatus:any;
  adminId : any;
  gallaryImgPath: any = [];
  constructor(    
    private dataService: ChatService,
    private router:Router,
    public popoverController: PopoverController,
    private imagePicker: ImagePicker,
    private commonService: CommonService,
    private nutritionService: NutritionService,
    ) { }
  DismissClick(data:any) {
    this.popoverController.dismiss(data);
  }
  ngOnInit() {
    this.dataService.chatGroup({'id':this.receiverId}).subscribe(
      (data: any) => {
        this.adminId = data.admin_id;
      });
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
    this.dataService.clearChatUser({'receiver_id':this.receiverId,'lastChatId':this.lastchatid}).subscribe(
      (data: any) => {
        this.DismissClick('clear');
      });
  }
  delete(){
    this.dataService.deleteChatUser({'room':this.room}).subscribe(
      (data: any) => {  
        this.DismissClick('refresh');      
        if(data.status){
          this.router.navigate(['/tabs/chats']);
        }
      });
  }
  deletegroup(){
    this.dataService.deleteGroup({'id':this.receiverId}).subscribe(
      (data: any) => {
        this.DismissClick('refresh');
        if(data.deleted){
          this.router.navigate(['/tabs/chats']);
        }
      });
  }
  openGallery() {
    let options: ImagePickerOptions = {
      maximumImagesCount: 8,
      outputType: 1
    };
    if (!this.imagePicker.hasReadPermission) {
      this.imagePicker.requestReadPermission();
      return null;
    }
    if (this.imagePicker.hasReadPermission) {
      this.imagePicker.getPictures(options).then((results) => {
        console.log('batman', results);
        if (results == 'OK') {
          return;
        }
        for (var i = 0; i < results.length; i++) {
          this.gallaryImgPath.push('data:image/jpeg;base64,' + results[i]);
        }
      }, (err) => { alert(err) });
    }
    if (this.gallaryImgPath.length == 0) {
      return false;
    }else{
      this.commonService.presentLoader();
      this.nutritionService.uploadPost({ 'file[]': this.gallaryImgPath, 'description': "Hello"}).subscribe((data: any) => {
        this.commonService.dismissLoader();
        this.DismissClick('refresh');
        if(data.deleted){
          this.router.navigate(['/tabs/chats']);
        }
      }, (err) => {  
        this.commonService.dismissLoader();
      });
    }
  }
  addgrouppicture(){
    console.log("Group Image");
  }
  exitgroup(){
    this.dataService.exitGroup({'id':this.receiverId}).subscribe(
      (data: any) => {
        this.DismissClick('refresh');
        if(data.exit){
          this.router.navigate(['/tabs/chats']);
        }
      });
  }
}
