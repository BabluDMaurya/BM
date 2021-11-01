import { Component, OnInit, ViewChild, HostListener, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDetailsComponent } from './../../modalContent/user-details/user-details.component';
import { CommonService } from './../../services/common.service';
import { FollowersComponent } from './../../modalContent/followers/followers.component';
import { FollowingComponent } from './../../modalContent/following/following.component';
import { PeopleViewService } from './../../services/people-view.service';
import { Config } from './../../config/config';
import { IonSlides, Platform, AlertController, PopoverController, ModalController, NavController } from '@ionic/angular';
import { SettingsService } from '../../services/settings.service';
import { NotificationService } from './../../services/notification.service';
import { PopoverComponent } from '../popover/popover.component';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
import { ToastController } from '@ionic/angular';
import { ProgramService } from 'src/app/services/program.service';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./../../app.component.scss', './my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {
  bannerDefaultImage = './../../../assets/images/editcoverpic.png';
  profileDefaultImage = './../../../assets/images/user.jpg';
  defaultPostImage : any = './../../../assets/images/loading.jpg';
  bannerImage :any;
  profileImage :any; 
  block = true;
  bookmark = true;
  isLoading = false;
  tabs = true;
  previewImage: any = [];
  expanded = 0; 
  consultantProfile: string = "aboutInfo";
  videotabs: string = "videotabs1";
  userData: any
  storagePath: any = Config.storagePath;
  url: any = Config.imgUrl;
  profilePicUrl: any = Config.profilePic;
  backgroundPicUrl: any = Config.backgroundPic;
  last_page: any;
  currentPage: any = 0;
  loginUserData: any;
  myPosts: any;

  sliderOpts = {
    zoom: false,
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 1.5
  }
  imageSlider = {
    zoom: false,
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 1
  }

  @HostListener('window:scroll', ['$event'])


  // viraj code starts here
  gotData: boolean = false;
  profileData: any;
  //------
  @ViewChild('slideWithNav3', { static: false }) slideWithNav3: IonSlides;
  sliderThree: any;
  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 4,
    zoom: false

  };
  notificationCount: any;
  sponcerCount: any;
  subscribe: any;
  noData: boolean;
  upcomingList: any;
  constructor(public router: Router,
    public route:ActivatedRoute,
    public platform: Platform,
    public alertCtrl: AlertController,
    public commonService: CommonService,
    private settingsService: SettingsService,
    private peopleView: PeopleViewService,
    private notification: NotificationService,
    public modalController: ModalController,
    public popoverController: PopoverController,
    public navController: NavController,
    public toastController: ToastController,
    private programService: ProgramService
  ) {
    route.params.subscribe(val => {
      
      this.ionViewWillEnter(); 
    // console.log('ngOnInit');
    // this.previewImage = [];
    // this.loginUserData = '';
    // this.commonService.footerTabHooks.subscribe(data => {
    //   if (data) {
    //   this.notificationCount = null;
    //     this.postData();
    //   }
    // });
    // this.commonService.footerTabHooks.subscribe(data => {
    //   if (data) {
    //   this.myPosts = null;
    //     this.videoPostData();
    //   }
    // });
    // this.peopleView.getMyPost('1', '', 1).subscribe((data: any) => {
    //   if (data.status == 401) {
    //     this.commonService.loggingout();
    //   }
    //   if (data.status == 500) {
    //     // this.commonService.presentToast(data.error.message);
    //     return null;
    //   }
    //   data.posts.data.forEach(element => {
    //     if (this.previewImage.length < 10) {
    //       this.previewImage = this.previewImage.concat(element['image_post']['0']['thumb_path']);
    //     }
    //   }); 
    // }, (err) => { 
    // });

    // this.loginUserData = JSON.parse(localStorage.getItem('userData')); 
    // console.log(this.loginUserData);   
    // this.videoPostData();
    });

    this.sliderThree =
    {
      isBeginningSlide: true,
      isEndSlide: false,
    };
  }
  ngOnInit() {
    console.log('ngOnInit');
    this.previewImage = [];
    this.loginUserData = '';
    this.commonService.footerTabHooks.subscribe(data => {
      if (data) {
      this.notificationCount = null;
        this.postData();
      }
    });
    this.commonService.footerTabHooks.subscribe(data => {
      if (data) {
      this.myPosts = null;
        this.videoPostData();
      }
    });
    this.peopleView.getMyPost('1', '', 1).subscribe((data: any) => {
      if (data.status == 401) {
        this.commonService.loggingout();
      }
      if (data.status == 500) {
        // this.commonService.presentToast(data.error.message);
        return null;
      }
      data.posts.data.forEach(element => {
        if (this.previewImage.length < 10) {
          this.previewImage = this.previewImage.concat(element['image_post']['0']['thumb_path']);
        }
      }); 
    }, (err) => { 
    });

    this.loginUserData = JSON.parse(localStorage.getItem('userData')); 
    console.log(this.loginUserData);   
    this.videoPostData();
    // if (this.consultID) {      
    //   this.getConsultProg(this.consultID);
    // } else {
      this.getMyprog();
    // }
  }
  postData() {
    this.loginUserData = JSON.parse(localStorage.getItem('userData'));
    this.notification.getUnreadCountMyProfile().subscribe((data: any) => {
      this.notificationCount = data.status;

      if(data.status.length > 0){
      this.notificationCount.forEach((element, i) => {
        // this.notificationCount[i].count = element.post_likes.length;
        // element.post_likes.filter((f) => {
        //   if (f.user_id == this.loginUserData.id) {
        //     this.notificationCount[i].liked = true;
        //   }
        // });
        // element.post_bookmarks.filter((f) => {
        //   if (f.user_id == this.loginUserData.id) {
        //     this.myPosts[i].bookmarked = true;
        //   }
        // });
      });
    }
    if(data.posts != '' && data.posts != null){
      this.last_page = data.posts.last_page;
      this.currentPage = data.posts.current_page;
    }
    this.gotData = true;
    });
  }
  doRefresh(event) {
    this.ngOnInit();
    this.ionViewWillEnter();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
  videoPostData() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.peopleView.getMyPost('2', this.loginUserData.id, 1).subscribe((data: any) => {
      this.myPosts = data.posts.data;
      this.myPosts.forEach((element, i) => {
        this.myPosts[i].count = element.post_likes.length;
        element.post_likes.filter((f) => {
          if (f.user_id == this.userData.id) {
            this.myPosts[i].liked = true;
          }
        });
        element.post_bookmarks.filter((f) => {
          if (f.user_id == this.userData.id) {
            this.myPosts[i].bookmarked = true;
          }
        });
      });
      this.last_page = data.posts.last_page;
      this.currentPage = data.posts.current_page;
      this.gotData = true;
    });
    // this.peopleView.getMyPost('2', this.loginUserData.id, 1).subscribe((data: any) => {
    //   this.myPosts = data.posts.data;
    //   this.myPosts.forEach((element, i) => {
    //     this.myPosts[i].count = element.post_likes.length;
    //     element.post_likes.filter((f) => {
    //       if (f.user_id == this.loginUserData.id) {
    //         this.myPosts[i].liked = true;
    //       }
    //     });
    //     element.post_bookmarks.filter((f) => {
    //       if (f.user_id == this.loginUserData.id) {
    //         this.myPosts[i].bookmarked = true;
    //       }
    //     });
    //   });      
    //   this.last_page = data.posts.last_page;
    //   this.currentPage = data.posts.current_page;
    //   this.gotData = true;
    // });
  }

  loadVideoData(event) {
    setTimeout(() => {
      if (this.currentPage > 0) {
        this.peopleView.getMyPost('2', this.loginUserData.id, (this.currentPage + 1)).subscribe((data: any) => {
          data.posts.data.forEach((element, i) => {
            element.count = element.post_likes.length;
            element.post_likes.filter((f) => {
              if (f.user_id == this.loginUserData.id) {
                data.posts.data[i].liked = true;
              }
            });
            element.post_bookmarks.filter((f) => {
              if (f.user_id == this.loginUserData.id) {
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

  async openViewer(path) {
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: this.url + path,
        srcHighRes: this.url + path,
        srcFallback: this.url + path
      },
      cssClass: 'ion-img-viewer',
      keyboardClose: true,
      showBackdrop: true
    });
    return await modal.present();
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
  ionViewWillEnter() {
    this.commonService.presentLoader();
    console.log('ionViewWillEnter');
    this.subscribe = this.platform.backButton.subscribeWithPriority(10, () => {
      if (this.router.isActive('/tabs/consultant-profile', true) && this.router.url === '/tabs/consultant-profile' &&  !this.commonService.modal) {
       let  buttons= [
              {
                text: 'Cancel',
                role: 'cancel'
              }, {
                text: 'Exit',
                handler: () => {
                  navigator['app'].exitApp();
                }
              }
            ]
        this.commonService.presentAlert('Are you sure to Exit the  App?','',buttons,'');
      }else{
        if(this.commonService.modal){
          this.commonService.dismissModal();
        } 
      } 
    });
    this.userData = JSON.parse(localStorage.getItem('userData'));
    if (this.userData.user_type == 0) {
      this.router.navigate(["/tabs/user-profile"]);
    }
    this.settingsService.getProfileData().subscribe((data: any) => {
      this.profileData = data.status;
      this.gotData = true;
      this.bannerImage = this.backgroundPicUrl + this.profileData.userData.bios.profile_background_image;
      this.validateFile(this.profileData.userData.bios.profile_pic);
      this.profileImage = this.profilePicUrl + this.profileData.userData.bios.profile_pic;
      localStorage.setItem('userData',JSON.stringify(data.status.userData)); 
      console.log(this.profileData);
    });
    this.commonService.dismissLoader();
  }
  ngAfterViewInit() {
    
  }
  @HostListener('window:scroll', ['$event'])

  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }
  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }
  notifications() {
    //this.router.navigateByUrl('/notifications');
    // this.router.navigate(["/notifications"]);
  }
  showmodal() {
    this.commonService.presentModal(UserDetailsComponent, 'bottomModal', '');
  }
  notification1() {      
    this.commonService.presentModal(FollowersComponent, 'fullModal', { 'profileData': this.profileData, 'otherUser': false });  
  }
  notification2() {
    this.commonService.presentModal(FollowingComponent, 'bottomModal', '');
  } 
  main() {
    this.router.navigate(["/main"]);
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
  ngOnDestroy() {
    this.consultantProfile = "aboutInfo";
  }
  ionViewWillLeave() {
    this.subscribe.unsubscribe();
    this.consultantProfile = "aboutInfo";
    this.tabs = true;
  }
  ionViewDidLeave() {
    this.subscribe.unsubscribe();
    this.consultantProfile = "aboutInfo";
    this.tabs = true;    
  }

  getMyprog() {
    this.programService.getUpcomingPrograms(null).subscribe(data => {
      if(data.programList.length<1)
      {
        this.noData=true;
      }
      console.log(data);
      console.log(this.noData + 'this.noData')
      this.upcomingList = this.getCounter(data.programList);
      this.upcomingList = data.programList.filter(el => {
        if (el.image_path) {
          el.img_arr = el.image_path.split(',');
        }
        el.converted = new Date(el.program_date + 'Z');
        el.expanded = false;
        console.log(this.upcomingList.length + 'fff');
        return el;
      });
    });    
  } 
  getConsultProg(id) {
    this.programService.getConsultPrograms({'consultId':id}).subscribe(data => {
      if(data.data.length<1)
      {
        this.noData=true;
      }
      this.upcomingList = this.getCounter(data.data);
      this.upcomingList = data.data.filter(el => {
        if (el.image_path) {
          el.img_arr = el.image_path.split(',');
        }
        el.converted = new Date(el.program_date + 'Z');
        el.expanded = false;
        return el;
      });
    });
  }
  getCounter(elementArr) {
    elementArr.filter(el => {
      el.convertedTime = new Date(el.program_date + 'Z');
      let a: any = new Date(el.program_date + 'Z');
      let b: any = new Date();
      let c: any;

      if (a > b) {
        c = Math.abs(a - b) / 1000;

      } else {
        c = 0;
        el.live = true;
      }

      el.cd = c;

      setInterval(function () {
        if (parseInt(el.cd) > 0)
          el.cd = parseInt(el.cd) - 1;
        el.dd = ~~(el.cd / (60 * 60 * 24))  
        el.hh = ~~(el.cd / (60 * 60) % 24);
        el.mm = ~~(el.cd % 3600 / 60);
        el.ss = (el.cd % 3600 % 60);
      }, 1000)
      return el;
    });

    return elementArr;
  }
  async showOptions(ev: any, commentStatus) {    
    console.log("commentStatus : "+ commentStatus);
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      translucent: true,
      cssClass: 'custom-popover',
      componentProps: { 'postId': ev, 'commentStatus': commentStatus }
    });
    popover.onDidDismiss().then((data) => {
      if (data.data.click == 1) {
        this.myPosts.forEach((f, i) => {
          if (f.id == ev) {
            this.myPosts[i].is_delete = 1;
          }
        });
      } else if (data.data.click == 2) {
        this.myPosts.forEach((f, i) => {
          if (f.id == ev) {
            this.myPosts[i].disable_comment = !commentStatus;
          }
        });
      }
    });
    return await popover.present();
  } 
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Coming Soon.',
      duration: 2000
    });
    toast.present();
  }
  validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (ext.toLowerCase() == 'png') {
      console.log(name + " it's a image");
        return true;        
    }else if(ext.toLowerCase() == 'jpeg'){
      console.log(name + " it's a image");
        return true;
    }else if(ext.toLowerCase() == 'jpg'){
      console.log(name + " it's a image");
        return true;
    }else {
        console.log(name + " it's Not a image");
        return false;
    }
}
}
