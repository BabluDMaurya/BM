import { Component, OnInit } from '@angular/core';
import { MessagePopupComponent } from '../user-profile-view/message-popup/message-popup.component';
import { ReportPopupComponent } from '../user-profile-view/report-popup/report-popup.component';
import { ShareModalComponent } from '../user-profile-view/share-modal/share-modal.component';
import { CommonService } from '../../services/common.service';
import { UserFollowersComponent } from './user-followers/user-followers.component';
import { PeopleViewService } from "../../services/people-view.service";
import { Router, ActivatedRoute, ParamMap} from "@angular/router";
import { PopoverController,NavController } from '@ionic/angular';

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
  constructor(public popoverController: PopoverController, 
              public commonService: CommonService,
              public router: Router,
              private navCtrl:NavController,
              private peopleView: PeopleViewService,
              private actRoute: ActivatedRoute,) {

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
    const popover = await this.popoverController.create({
      component: MessagePopupComponent,
      event: ev,
      componentProps: { page: 'Login' },
      cssClass: 'popover_class',
    });
    return await popover.present();
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
      if(data.statusDetails.block_status)
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
