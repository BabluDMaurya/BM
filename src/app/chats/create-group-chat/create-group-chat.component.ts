import { Component, OnInit,Input } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { CommonService } from 'src/app/services/common.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChatRoomsComponent } from './../chat-rooms/chat-rooms.component';

@Component({
  selector: 'app-create-group-chat',
  templateUrl: './create-group-chat.component.html',
  styleUrls: ['./../../app.component.scss','./create-group-chat.component.scss'],
})
export class CreateGroupChatComponent implements OnInit {
  @Input() title;
  @Input() msg;
  @Input() formData;
  @Input() returnUrl;
  buttonDisable : boolean = false;
  chatGroupForm: FormGroup;
  submitted = false;
  constructor(
    private dataService: ChatService,
    public commonService : CommonService,
    public formBuilder: FormBuilder) {this.createForm(); }

  ngOnInit() {   
  }
  createForm() {
    this.chatGroupForm = this.formBuilder.group({
      groupName: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
  }
  validation_messages = {
    'groupName': [
      { type: 'required', message: 'Group Name is required' },
    ],
  };
  closeModel(){
    this.commonService.dismissModal();
  }
  onSubmit() {
    this.submitted = true;
    if (this.chatGroupForm.invalid) {
      console.log(this.chatGroupForm);
      return;
    }
    this.commonService.presentLoader();
    if(this.formData != null && this.formData != ''){                
      // console.log(this.chatGroupForm.value.groupName);
        this.formData.groupName = this.chatGroupForm.value.groupName;
        this.dataService.sendChatRequest(this.formData).subscribe(
          (data: any) => {
            this.commonService.dismissLoader();            
            if(data.status == 'success'){
              var fileData = {
                returnUrl : this.returnUrl,
                chatType : data.type,
                room : data.room,
                receiverId : parseInt(data.requestID),
                }
                this.chatRooms(fileData);
                this.commonService.dismissModal();
              // this.commonService.presentModal(ChatRoomsComponent,'fullModal',fileData);
            }else{
                console.log('Somthing wrong');
                 return false;
            }
          },err=>{
            this.commonService.presentLoader();
          });    
        }  
  }
  chatRooms(fileData : any){
    this.commonService.presentModal(ChatRoomsComponent,'fullModal',fileData);
  }
}
