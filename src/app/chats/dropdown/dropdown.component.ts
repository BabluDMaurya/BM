import { Component, OnInit ,Input} from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Router } from '@angular/router';
import { PopoverController} from '@ionic/angular';
import { CommonService } from '../../services/common.service';
import { NutritionService } from '../../services/nutrition.service';
import { Config } from './../../config/config';
import { Storage } from '@ionic/storage';

import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker,ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

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
  fileUrl: any = null;
  respData: any;
  token: any;
  profile_pic : any;
  constructor(    
    private dataService: ChatService,
    private router:Router,
    public popoverController: PopoverController,
    private imagePicker: ImagePicker,
    private commonService: CommonService,
    private nutritionService: NutritionService,
    private storage: Storage,
    private crop: Crop,
  private transfer: FileTransfer,
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
        this.commonService.dismissModal();
        // if(this.status == 1){          
        //   this.router.navigate(['/tabs/chats']);
        // }
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
        this.commonService.dismissModal();       
          // this.router.navigate(['/tabs/chats']);
      });
  }
  deletegroup(){
    this.dataService.deleteGroup({'id':this.receiverId}).subscribe(
      (data: any) => {
        this.DismissClick('refresh'); 
        this.commonService.dismissModal();       
          // this.router.navigate(['/tabs/chats']);
      });
  }  
  cropUpload() {
    this.imagePicker.getPictures({ maximumImagesCount: 1, outputType: 0 }).then((results) => {
      for (let i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
          this.crop.crop(results[i], { 
            quality: 100
           })
            .then(
              newImage => {
                console.log('new image path is: ' + newImage);
                this.token = localStorage.getItem('userToken');
                const headers = { 'Authorization': 'Bearer ' + this.token };
                const parameters = { requestId: this.receiverId };

                const fileTransfer: FileTransferObject = this.transfer.create();
                const uploadOpts: FileUploadOptions = {
                   fileKey: 'file',
                   fileName: newImage.substr(newImage.lastIndexOf('/') + 1),
                   httpMethod: 'POST',
                   chunkedMode: false
                };  
                uploadOpts.headers = headers;
                uploadOpts.params = parameters;

                fileTransfer.upload(newImage, Config.ApiUrl + 'api/auth/uploadGroupPicture', uploadOpts)
                 .then((data) => {                  
                   this.respData = JSON.parse(data.response);                  
                   this.profile_pic = this.respData.profile_pic;
                   this.fileUrl = this.respData.fileUrl;
                   this.DismissClick('refresh');                   
                 }, (err) => {
                   console.log(err);
                 });
              },
              error => console.error('Error cropping image', error)
            );
      }
    }, (err) => { console.log(err); });
  }
  exitgroup(){
    this.dataService.exitGroup({'id':this.receiverId}).subscribe(
      (data: any) => {
        this.DismissClick('refresh');
        this.commonService.dismissModal();
        // if(data.exit){
        //   this.router.navigate(['/tabs/chats']);
        // }
      });
  }
}
