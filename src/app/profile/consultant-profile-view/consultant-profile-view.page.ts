import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Platform,PopoverController, NavController, ModalController, ActionSheetController  } from '@ionic/angular';
import { CommonService } from '../../services/common.service';
import { ChatPopupComponent } from '../consultant-profile-view/chat-popup/chat-popup.component';
import { InfoModalComponent } from '../consultant-profile-view/info-modal/info-modal.component';
import { ShareModalComponent } from '../user-profile-view/share-modal/share-modal.component';
import { NutritionModalComponent } from '../../user-profile/nutrition-modal/nutrition-modal.component';
import { NotificationModalComponent } from '../consultant-profile-view/notification-modal/notification-modal.component'
import { UserFollowersComponent } from '../user-profile-view/user-followers/user-followers.component'
import { FollowersComponent } from '../../modalContent/followers/followers.component';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { PeopleViewService } from "../../services/people-view.service";
import { Config } from './../../config/config';
import { Clipboard } from '@ionic-native/clipboard/ngx';
//import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { PrivacyPage } from '../../settings/privacy/privacy.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ChatService } from 'src/app/services/chat.service';
import { ChatRoomsComponent } from './../../chats/chat-rooms/chat-rooms.component';

@Component({
  selector: 'app-consultant-profile-view',
  templateUrl: './consultant-profile-view.page.html',
  styleUrls: ['./../../app.component.scss', '../../user-profile/user-profile.page.scss', './consultant-profile-view.page.scss'],

})
export class ConsultantProfileViewPage implements OnInit {
  @ViewChild(NavController,{static:false}) navChild: NavController;
  tabs = true;
  followStatus: any;
  previewImage: any = [];
  sliderOpts = {
    zoom: true,
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 1.5
  }
  consultantProfile: string = "aboutInfo";
  follow = true;
  block: boolean;
  like = true;
  bookmark = true;
  expanded = 0;
  profileData: any;
  id: any;
  userData: any;
  userId: any;
  storagePath: any = Config.storagePath;
  logText = "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.";
  @ViewChild('stickyMenu', { static: false }) menuElement: ElementRef;
  sticky: boolean = false;
  elementPosition: any;

  url: any = Config.imgUrl;
  profilePicUrl: any = Config.profilePic;
  backgroundPicUrl: any = Config.backgroundPic;
  bannerDefaultImage = './../../../assets/images/editcoverpic.png';
  profileDefaultImage = './../../../assets/images/user.jpg';
  defaultPostImage : any = './../../../assets/images/loading.jpg';

  last_page: any;
  currentPage: any = 0;
  myPosts: any;
  gotData: boolean = false;

  constructor(
    public router: Router,
    public popoverController: PopoverController,
    public modalController: ModalController,
    public commonService: CommonService,
    private navCtrl: NavController,
    private actRoute: ActivatedRoute,
    private peopleView: PeopleViewService,
    private clipboard: Clipboard,
    public deeplink: Deeplinks,
    private platform: Platform,
    public socialSharing: SocialSharing,
    public chatService : ChatService,
    public actionSheetController: ActionSheetController,
  ) {

    platform.ready().then(() => {
      
      // THIS BELOW CODE WILL CHECK FOR DEEPLINKS FROM OTHER APPS OR BROWSER 
      if(this.userData){
        this.deeplink.routeWithNavController(this.navChild, {
          '/privacy': PrivacyPage,
        }).subscribe((match) => {
          console.log('Successfully routed', match);
        }, (nomatch) => {
          console.warn('Unmatched Route', nomatch);
        });
      }
      
  });
   }

  consultID: any;
  ionViewWillEnter() {
    if (this.consultID == this.userData.id) {
      this.router.navigate(["/tabs/consultant-profile"]);
    }
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    

    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      this.consultID = params.get('userData');
    });

    if(this.userData){
      this.userId = this.userData.id;
      this.peopleView.getUserData({ 'userId': this.consultID }).subscribe((data: any) => {
        this.profileData = data;
      });
    } else {
      this.peopleView.getGuestUserData({ 'userId': this.consultID }).subscribe((data: any) => {
        this.profileData = data;
      });
    }
    
    this.peopleView.getBlockStatus({ 'blockUserId': this.consultID }).subscribe((data) => {
      if (data.statusDetails.block_status != null && data.statusDetails.block_status == '1') {
        this.block = true;
      } else {
        this.block = false;
      }
    });
    this.peopleView.getMyPost('1', this.consultID, 1).subscribe((data: any) => {

      console.log(data);
      data.posts.data.forEach(element => {
        this.previewImage = this.previewImage.concat(element['image_post']['0']['thumb_path']);
      });
    });

    this.peopleView.getFolloFollowingResult({ 'profileId': this.consultID }).subscribe(
      (data: any) => {
        this.followStatus = data.status;
      });
    this.videoPostData();
  }
  async openViewer(path) {
    console.log(path)
    // const modal = await this.modalController.create({
    //   component: ViewerModalComponent,
    //   componentProps: {
    //     src: this.storagePath + path, // required
    //     srcHighRes: this.storagePath + path,
    //     srcFallback: this.storagePath + path
    //   },
    //   cssClass: 'ion-img-viewer', // required
    //   keyboardClose: true,
    //   showBackdrop: true
    // });

    // return await modal.present();
  }
  liked(postId, likeStat) {
    this.myPosts.forEach((element, i) => {
      if (element.id == postId) {
        this.myPosts[i].liked = !likeStat;
        if (likeStat) {
          this.myPosts[i].count = (this.myPosts[i].count - 1);
        } else {
          this.myPosts[i].count = (this.myPosts[i].count + 1);
        }
      }
    });
    this.peopleView.likedPost({ 'postId': postId, 'liked': likeStat }).subscribe((data: any) => {
      if (data.status) {
        this.commonService.presentToast(data.status);
      }
    });
  }
  videoPostData() {
    if(this.userData){
      //postType,userId, videoType,page    
      this.peopleView.getMyPost('1,2,8', this.consultID, 1).subscribe((data: any) => {
        console.log('data', data)
        this.myPosts = data.posts.data;
        this.myPosts.forEach((element, i) => {
          this.myPosts[i].count = element.post_likes.length;

          if (element.post_type == 2) {
            var img = element.video_post[0].thumb_path.split(',');
            element.video_post[0].single_thumb_path = img[0];
          }
          element.post_likes.filter((f) => {
            if (f.user_id == this.userId) {
              this.myPosts[i].liked = true;
            }
          });
          element.post_bookmarks.filter((f) => {
            if (f.user_id == this.userId) {
              this.myPosts[i].bookmarked = true;
            }
          });
        });
        this.last_page = data.posts.last_page;
        this.currentPage = data.posts.current_page;
        this.gotData = true;
      });
    } else {
      //postType,userId, videoType,page    
      this.peopleView.guestGetMyPost('1,2,8', this.consultID, 1).subscribe((data: any) => {
        console.log('data', data)
        this.myPosts = data.posts.data;
        this.myPosts.forEach((element, i) => {
          this.myPosts[i].count = element.post_likes.length;

          if (element.post_type == 2) {
            var img = element.video_post[0].thumb_path.split(',');
            element.video_post[0].single_thumb_path = img[0];
          }
          element.post_likes.filter((f) => {
            if (f.user_id == this.userId) {
              this.myPosts[i].liked = true;
            }
          });
          element.post_bookmarks.filter((f) => {
            if (f.user_id == this.userId) {
              this.myPosts[i].bookmarked = true;
            }
          });
        });
        this.last_page = data.posts.last_page;
        this.currentPage = data.posts.current_page;
        this.gotData = true;
      });
    }
    
  }
  loadVideoData(event) {
    setTimeout(() => {
      if (this.currentPage > 0) {
        //postType,userId, videoType,page 
        //getVedioType 
          
        this.peopleView.getMyPost('1,2,8', this.consultID, (this.currentPage + 1)).subscribe((data: any) => {
          data.posts.data.forEach((element, i) => {
            element.count = element.post_likes.length;
            if(element.post_type == 2){
              var img = element.video_post[0].thumb_path.split(',');
              element.video_post[0].single_thumb_path = img[0];
            }
            element.post_likes.filter((f) => {
              if (f.user_id == this.userId) {
                data.posts.data[i].liked = true;
              }
            });
            element.post_bookmarks.filter((f) => {
              if (f.user_id == this.userId) {
                this.myPosts[i].bookmarked = true;
              }
            });
          });
          this.myPosts = this.myPosts.concat(data.posts.data);
          this.last_page = data.posts.last_page;
          this.currentPage = data.posts.current_page;
        });
      }
      event.target.complete();
      if (this.last_page <= (this.currentPage + 1)) {
        event.target.disabled = true;
      }
    }, 500);
  }
  async followUp(followStatus) {
    if (followStatus == 'Unfollow') {
      var status = 'true';
    } else {
      var status = 'false';
    }
    this.commonService.presentLoader();
    this.peopleView.followUpPeople({ 'uid': this.userId, 'followUpId': this.consultID, 'status': status }).subscribe(
      (data: any) => {
        this.commonService.dismissLoader();
        if (data.followStatus == 'false') {
          this.followStatus = 'Unfollow';
          this.commonService.presentToast('Successfully Followed !');
        } else if (data.followStatus == 'true' && data.followResult == '1') {
          this.followStatus = 'Followback';
          this.commonService.presentToast('Successfully UnFollowed !');
        } else {
          this.followStatus = 'Follow';
          this.commonService.presentToast('Successfully UnFollowed !');
        }
      });
  }
  getContent() {
    return document.querySelector('ion-content');
  }
  videoTabsScroll() {
    this.tabs = true;
    this.getContent().scrollToTop(500);
  }
  otherTabsScroll() {
    this.tabs = false;
    this.getContent().scrollToTop(500);
  }  
  async chatPopup(ev: any) {  
    this.commonService.presentLoader();  
    this.chatService.checkChatUser({'id':this.consultID}).subscribe((data: any) => {  
      if(data.length > 0){
        this.commonService.dismissLoader();
        var chatRoom = data[0].chatroom.room;    
        var chatReceiverId = data[0].receiverID;    
        var chatSenderId = data[0].senderID;    
        var chatType = data[0].type;  
        var roomId = data[0].id;    
        var request_id = data[0].chatroom.request_id; 

        this.commonService.dismissLoader();
        var fileData = {
          chatType : parseInt(chatType),
          room : chatRoom,
          receiverId : parseInt(chatReceiverId),
          requestId : parseInt(request_id),
          }
        this.commonService.presentModal(ChatRoomsComponent,'fullModal',fileData);
      }else{
        this.commonService.dismissLoader();
        // chat_type = 1:consultant,2:user,3:program
        this.router.navigate(["/first-message/"+ this.consultID + "/1"]);
      }      
    },
    err=> {
      this.commonService.presentToast("Couldnt load data, Something went wrong.");
      this.commonService.dismissLoader();      
    });
  }

  reportPopup(ev: any) {
    let btns = [{
      text: 'Cancel',
      handler: (blah) => { }
    }, {
      text: 'Okay',
      handler: () => {

        this.sendReport();
      }
    }]
    this.commonService.presentAlert('Report A User', 'Are you sure.?', btns,'')
  }

  blockUser(event) {
    this.commonService.presentLoader();
    this.peopleView.blockuser({ 'blockUserId': this.consultID, 'blocked': event }).subscribe(data => {
      this.commonService.dismissLoader();
      if (data.statusDetails.block_status) {
        this.commonService.presentToast('Blocked User');
        this.block = true;
      } else {
        this.commonService.presentToast('UnBlocked User');
        this.block = false;
      }
      err => {
        this.commonService.dismissLoader();
      }
    })
  }

  notification1() {
    this.commonService.presentModal(FollowersComponent, 'fullModal', { 'profileData': this.profileData, 'otherUser': true });
  }

  infomodal() {
    this.commonService.presentModal(InfoModalComponent, 'bottomModal', null);
  }

  nutritionModal() {
    this.commonService.presentModal(NutritionModalComponent, 'fullModal', null);
  }

  notificationModal() {
    this.commonService.presentModal(NotificationModalComponent, 'fullModal', { 'profileData': this.profileData });
  }

  userFollowers() {
    this.commonService.presentModal(UserFollowersComponent, 'fullModal', { 'userId': this.consultID });
  }

  //------------------ -- GO BACK  ------------
  goBack() {
    this.navCtrl.back();
  }

  sendReport() {
    this.commonService.presentLoader();
    this.peopleView.reportPeople({ 'userId': this.consultID, 'message': 'reported' }).subscribe(
      data => {
        this.commonService.presentToast("Reported account.");
        this.commonService.dismissLoader();
      },
      err => {
        this.commonService.presentToast("Reported account.");
        this.commonService.dismissLoader();
      }
    );
  }

  shareModal() {
    // console.log('testtest',this.socialSharing);

    // this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
    //   // Success!
    // }).catch(() => {
    //   // Error!
    // });

    this.clipboard.copy(Config.profileLink+this.consultID);
    this.clipboard.paste().then(
      (resolve: string) => {
        alert(resolve);
      },
      (reject: string) => {
        alert('Error: ' + reject);
      }
    );
  }
  shareItem() {
    // var options = {
    //   message: 'Profile Page', // not supported on some apps (Facebook, Instagram)
    //   // subject: 'the subject', // fi. for email
    //   // files: ['', ''], // an array of filenames either locally or remotely
    //   url: 'https://ionicinto.wdipl.com/consultant-profile-view/' + this.consultID,
    //   chooserTitle: 'Pick an intoactive app', // Android only, you can override the default share sheet title
    //   appPackageName: 'com.bm.ionicfcm', // Android only, you can provide id of the App you want to share with
    //   // iPadCoordinates: '0,0,0,0' //IOS only iPadCoordinates for where the popover should be point.  Format with x,y,width,height
    // };
    // this.socialSharing.shareWithOptions(options);
    //this code is to use the social sharing plugin
    // message, subject, file, url
    this.socialSharing.share("Profile Page","","","https://ionicinto.wdipl.com/consultant-profile-view/" + this.consultID)
    .then(() => {

    })
    .catch(() => {

    });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Share this profile',
          // icon: 'share',
          handler: () => {
            this.shareItem();
          }
        },
      {
        text: 'Report',
        // icon: 'alert',
        handler: () => {
          this.reportPopup('');
          console.log('report');
        }
      }, {
        text: this.block ?'Unblock':'Block',
        // icon: 'warning',
        handler: () => {
          this.blockUser(this.block);
          console.log('block');
        }
      },{
        text: 'Cancel',
        // icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  async redirectToLogin(){
    this.router.navigate(["/signin"]);
  }
}
