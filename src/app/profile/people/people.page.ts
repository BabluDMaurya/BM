import { Component, OnInit } from '@angular/core';
import { PeopleViewService } from '../../services/people-view.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./../../app.component.scss','./people.page.scss'],
})
export class PeoplePage implements OnInit {
  followerFilteredUsers: [];
  followingFilteredUsers: [];
  private _searchTerm: string;
  private _followingSearchTrem: string;

  //search followers
  get followerSearchTerm(): string  {
    return this._searchTerm;
  }
  set followerSearchTerm(value: string) {
    this._searchTerm = value;
    this.followerFilteredUsers = this.followerFilterUser(value);
  }

  //search followings
  get followingSearchTerm(): string  {
    return this._followingSearchTrem;
  }
  set followingSearchTerm(value: string) {
    this._followingSearchTrem = value;
    this.followingFilteredUsers = this.followingFilterUser(value);
  }
  followers: any;
  followings: any;
  storageData: any;
  followButton: any;
  userId: any;
  token: any;
  people_tabs: string = "followers";
  segmentChanged(ev: any) {
    this.people_tabs=ev.detail.value;   
  }
  constructor(public peopleViewService: PeopleViewService,
              public storage: Storage,
              private navCtrl: NavController,
              ) { }

  ngOnInit() {
    const dataPromise = this.storage.get('userData');
      dataPromise.then(data => {
        this.storageData = JSON.parse(data)
        this.userId = this.storageData.id; 
      });
  
      // this.tokenStorage.GetPayLoad().then(result => {
      //   console.log("apeo" + result);
        
      // });

    this.peopleViewService.getFollowers('').subscribe(
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
        // this.followers.SetToken(data.token);

      });
      

      this.peopleViewService.getFollowings('').subscribe(
        (data: any) => {
         this.followings = data.result;
         this.followingFilteredUsers = this.followings;
         this.followings.forEach((element, i) => {
          element.follower_user.btnName = 'UNFOLLOW';
          element.follower_user.color = 'medium';
          if(element.follower_user.following_rel != null){
            element.follower_user.follow = true;
            element.follower_user.class = '';
           // element.follower_user.color = 'medium';
          }else{
            element.follower_user.follow = '';
            
          }
        });
        
        });
  }
  // ionViewDidLoad(){
  //   this.tokenStorage.GetPayLoad().then(value => {
  //     this.token = value;
  //   }) 
  //   }
  followerFilterUser(searchString: string) {
    return this.followers.filter(employee =>
      employee.following_user.user_name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  followingFilterUser(searchString: string) {
    return this.followings.filter(employee =>
      employee.follower_user.user_name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
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
       
      });
  }

  async unFollowPeople(btnName,folloUpId,status){
    
    if(btnName == 'UNFOLLOW'){
        status = 'true';
      }else if(btnName == 'FOLLOWBACK' || btnName == 'FOLLOW'){
        status = 'false';
      }
    this.peopleViewService.followUpPeople({'followUpId': folloUpId,'status': status}).subscribe(
      (data: any) => {
        if(data.followStatus == 'true'){
          this.followings.forEach((element, i) => {  
            if (element.follower_user.id == folloUpId && !element.follower_user.follower_rel ) {
                element.follower_user.btnName = 'FOLLOWBACK';
                element.follower_user.class = 'green text-white';
                element.follower_user.color = '';
            }else if(element.follower_user.id == folloUpId && element.follower_user.follower_rel == 'null'){
                element.follower_user.btnName = 'FOLLOW';
                element.follower_user.class = 'green text-white';
                element.follower_user.color = '';
            }
          });
        } else if (data.followStatus == 'false'){
          this.followings.forEach((element, i) => {  
            
            if (element.follower_user.id == folloUpId) {
                element.follower_user.btnName = 'UNFOLLOW';
                element.follower_user.color = 'medium';
                element.follower_user.class = '';
            }
          });
        }
      });
  }
  
   openToggle(){
    document.getElementById('circularMenu').classList.toggle('active');
    document.getElementById('floting-position').classList.toggle('active');
  }
  goBack() {
    this.navCtrl.back();
  }

}