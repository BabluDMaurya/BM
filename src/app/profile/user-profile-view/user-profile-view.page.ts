import { Component, OnInit } from '@angular/core';
import { MessagePopupComponent } from '../user-profile-view/message-popup/message-popup.component';
import { ReportPopupComponent } from '../user-profile-view/report-popup/report-popup.component';
import { ShareModalComponent } from '../user-profile-view/share-modal/share-modal.component';
import { CommonService } from '../../services/common.service';
import { UserFollowersComponent } from './user-followers/user-followers.component';
import { PeopleViewService } from "../../services/people-view.service";
import { Router, ActivatedRoute, ParamMap} from "@angular/router";
import { PopoverController,NavController } from '@ionic/angular';
import { ChatService } from 'src/app/services/chat.service';
import { Config } from './../../config/config';


@Component({
  selector: 'app-user-profile-view',
  templateUrl: './user-profile-view.page.html',
  styleUrls: ['./../../app.component.scss', './user-profile-view.page.scss'],
})
export class UserProfileViewPage implements OnInit {
  follow = true;
  block :any;
  profileData:any;
  consultID:any;
  userData:any;
  userId: any;
  followStatus: any;
  bannerDefaultImage = './../../../assets/images/editcoverpic.png';
  profileDefaultImage = './../../../assets/images/user.jpg';
  profilePicUrl: any = Config.profilePic;
  backgroundPicUrl: any = Config.backgroundPic;
  constructor(public popoverController: PopoverController, 
              public commonService: CommonService,
              public router: Router,
              private navCtrl:NavController,
              private peopleView: PeopleViewService,
              private actRoute: ActivatedRoute,
              private chatService : ChatService) {

               }
               ionViewWillEnter(){
                this.userData =JSON.parse(localStorage.getItem('userData'));
                this.userId = this.userData.id; 
                if(this.consultID == this.userData.id)
                {
                  this.router.navigate(["/tabs/user-profile"]);
                }
              }
  ngOnInit() {

    this.actRoute.paramMap.subscribe((params:ParamMap)=>{
      this.consultID=params.get('userData');
    });
    this.peopleView.getUserData({'userId':this.consultID}).subscribe((data:any)=>{
      console.log(data);
      this.profileData = data
    });

    this.peopleView.getFolloFollowingResult({'profileId': this.consultID}).subscribe(
      (data: any) => {
      this.followStatus = data.status; 
        console.log(data.status + ' -status');
      });
      this.peopleView.getBlockStatus({'blockUserId':this.consultID}).subscribe((data)=>{
        if(data.statusDetails.block_status == 1)
        {
          this.block = true;
        }else{
          this.block= false;
        }
      });

  }

  async followUp(followStatus){
    //console.log(followStatus + ' -ddd');
    if(followStatus == 'Unfollow'){
      var status = 'true';
    }else{
      var status = 'false';
    }
    this.commonService.presentLoader();
    this.peopleView.followUpPeople({'uid' : this.userId,'followUpId': this.consultID, 'status' : status}).subscribe(
      (data: any) => {
        this.commonService.dismissLoader();
        if(data.followStatus == 'false'){
          this.followStatus = 'Unfollow';
          this.commonService.presentToast('Successfully Followed !');
        }else if(data.followStatus == 'true' && data.followResult == '1'){
          this.followStatus = 'Followback';
          this.commonService.presentToast('Successfully UnFollowed !');
        }else{
          this.followStatus = 'Follow';
          this.commonService.presentToast('Successfully UnFollowed !');
        }
        console.log('ss- '+ this.followStatus);
        console.log('data.followStatus - ' + data.followStatus);
      });
  }

  async messagePopup(ev: any) {
    this.commonService.presentLoader();  
    this.chatService.checkChatUser({'id':this.consultID}).subscribe((data: any) => {  
      if(data.length > 0){
        this.commonService.dismissLoader();
        var chatRoom = data[0].chatroom.room;    
        var chatReceiverId = data[0].receiverID;    
        var chatSenderId = data[0].senderID;    
        var chatType = data[0].type;  
        var roomId = data[0].id;    
        this.commonService.dismissLoader();
        this.router.navigate(['/chat-room/'+chatReceiverId+'/'+chatRoom+'/'+chatType]);
      }else{
        this.commonService.dismissLoader();
        // chat_type = 1:consultant,2:user,3:program
        this.router.navigate(["/first-message/"+ this.consultID + "/2"]);
      }      
    },
    err=> {
      this.commonService.presentToast("Couldnt load data, Something went wrong.");
      this.commonService.dismissLoader();      
    });
  }

  async reportPopup(ev: any) {
    const popover = await this.popoverController.create({
      component: ReportPopupComponent,
      event: ev,
      componentProps: { page: 'Login' },
      cssClass: 'popover_class',
    });
    return await popover.present();
  }

  openModal() {
    this.commonService.presentModal(ShareModalComponent, 'fullModal', '');
  }

  userFollowers() {
    this.commonService.presentModal(UserFollowersComponent, 'fullModal', {'userId':this.consultID});
  }
  blockUser(event){
    this.commonService.presentLoader();
    this.peopleView.blockuser({'blockUserId':this.consultID , 'blocked':event}).subscribe(data=>{
      this.commonService.dismissLoader();
      if(data.statusDetails.block_status != null)
      {
        this.commonService.presentToast('Blocked User');
        this.block=true;
      }else{
        this.commonService.presentToast('UnBlocked User');
        this.block=false;
      }
      err=>{
        this.commonService.dismissLoader();
      }
    })
  }
    //------------------ -- GO BACK  ------------
    goBack() {
      this.navCtrl.back();
    }
}
