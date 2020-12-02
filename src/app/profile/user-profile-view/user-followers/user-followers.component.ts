import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { PopoverController } from '@ionic/angular';
import { FollowingPopupComponent } from '../following-popup/following-popup.component';
import { PeopleViewService } from '../../../services/people-view.service';
import { Storage } from '@ionic/storage';
import { Config } from "../../../config/config";
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user-followers',
  templateUrl: './user-followers.component.html',
  styleUrls: ['../../../app.component.scss', './user-followers.component.scss'],
})
export class UserFollowersComponent implements OnInit {
  followerFilteredUsers: [];
  private _searchTerm: string;

  //search followers
  get followerSearchTerm(): string  {
    return this._searchTerm;
  }
  set followerSearchTerm(value: string) {
    this._searchTerm = value;
    this.followerFilteredUsers = this.followerFilterUser(value);
  }

  
  followers: any;
  followings: any;
  storageData: any;
  followButton: any;
  viewUserId: any;
  userId: any;
  people_tabs: string = "followers";
  segmentChanged(ev: any) {
    this.people_tabs=ev.detail.value;   
  }
  constructor(public commonService: CommonService, 
    private popoverController: PopoverController,
    public peopleViewService: PeopleViewService,
    public storage: Storage,
    public config: Config,
    public navParamas: NavParams) { }

  ngOnInit() {
    this.viewUserId = this.navParamas.get('userId');
    const dataPromise = this.storage.get('userData');
    dataPromise.then(data => {
      this.storageData = JSON.parse(data)
      this.userId = this.storageData.id;
  });

    this.peopleViewService.getFollowers(this.viewUserId).subscribe(
      (data: any) => {
        this.followers = data.result;
        this.followerFilteredUsers = this.followers;
        this.followers.forEach((element, i) => {
          
          if(element.following_user.follower_rel != null){
            element.following_user.follow = true;
            element.following_user.class = ''
            element.following_user.color = 'medium'
          }else{
            element.following_user.follow = '';
            element.following_user.class = 'green text-white';
            element.following_user.color = '';
          }
        });
       console.log(this.followers);
       console.log('followersload');
      });
  }

  followerFilterUser(searchString: string) {
    return this.followers.filter(employee =>
      employee.following_user.user_name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }


  async followUpPeople(folloUpId,status){

    this.peopleViewService.followUpPeople({'followUpId': folloUpId, 'status' : status}).subscribe(
      (data: any) => {
        if(data.followStatus == 'true'){
          this.followers.forEach((element, i) => {  
           
            if (element.following_user.id == folloUpId) {
                element.following_user.follow = false;
                element.following_user.class = 'green text-white';
                element.following_user.color = '';
            }
          });

        } else if (data.followStatus == 'false'){
          this.followers.forEach((element, i) => {  
            
            if (element.following_user.id == folloUpId) {
                element.following_user.follow = true;
                element.following_user.class = '';
                element.following_user.color = 'medium';
            }
          });
        }
        console.log(this.followers);
        console.log(' this.followers')
      });
  }

  

  // async unfollow(ev: any) {
  //   const popover = await this.popoverController.create({
  //     component: FollowingPopupComponent,
  //     event: ev,
  //     componentProps: { page: 'Login' },
  //     cssClass: 'popover_class',
  //   });
  //   return await popover.present();
  // }
 
  dismiss() {
    let dataArray = [{ 'dismissed': true }];
    this.commonService.dismissModal(dataArray);
  }

}
