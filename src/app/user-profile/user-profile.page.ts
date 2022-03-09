import { Component, OnInit, OnDestroy } from '@angular/core';
import { PopoverController, Platform} from '@ionic/angular';
import { CommonService } from '../.././app/services/common.service';
import { NutritionModalComponent } from '../../app/user-profile/nutrition-modal/nutrition-modal.component';
import { PopOverComponent } from '../user-profile/pop-over/pop-over.component';
import { SettingsService } from './../services/settings.service';
import {Router} from '@angular/router';
import { ProgramService } from './../services/program.service';
import { Config } from './../config/config';
import { HomeService } from '../services/home.service';
import { FollowersComponent } from '../modalContent/followers/followers.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./../app.component.scss','./user-profile.page.scss'],
})

export class UserProfilePage implements OnInit {
  defaultPostImage : any = './../../../assets/images/loading.jpg';
  bannerDefaultImage = './../../../assets/images/editcoverpic.png';
  profileDefaultImage = './../../../assets/images/user.jpg';
  programDefaultImage = './../../../assets/images/loading.jpg';
  storagePath = Config.storagePath;
  bannerImage :any;
  profileImage :any; 
  gotData :boolean = false;
  profileData :any ;
  userProfile: string = "aboutInfo";
  userData:any;
  upcomingProgram:any;
  last_page: any;
  url: any = Config.imgUrl;
  profilePicUrl: any = Config.profilePic;
  backgroundPicUrl: any = Config.backgroundPic;
  currentPage: any = 0;
  postData: any = [];
  constructor(private commonService: CommonService,
    private homeService: HomeService,
    public popoverController: PopoverController,
    private settingsService: SettingsService,
    private platform: Platform,
    private programService:ProgramService,
    private router: Router) {
  
   } 

  ngOnInit() {
    this.userData =JSON.parse(localStorage.getItem('userData'));
    console.log(this.userData);
    this.settingsService.getProfileData().subscribe((data:any)=>{
      this.profileData =data.status;
      this.gotData =true;
      this.bannerImage = this.backgroundPicUrl + this.profileData.userData.bios.profile_background_image;
      this.profileImage = this.profilePicUrl + this.profileData.userData.bios.profile_pic;
      console.log(this.profileData);
    });
    this.currentPage = 0;
    this.homeService.getUsersFollowingContent({ 'page': (this.currentPage) }).subscribe(data => {
      this.postData = this.like_bookmark(data.postData.data);
      this.last_page = data.postData.last_page;
      this.currentPage = data.postData.current_page;
      console.log(this.postData);
      if(this.postData.length < 1){
        this.gotData = true;
      }
      this.commonService.dismissLoader();
    });
  }
  async settingsPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopOverComponent,
      event: ev,
      componentProps: { page: 'Login' },
      cssClass: 'popover_class',
    });

    
    return await popover.present();
  }
  showmodal(){
    this.commonService.presentModal(NutritionModalComponent,'fullModal','');
  }
  
  ionViewWillEnter(){
    this.programService.getUpcomingPrograms(null).subscribe(data=>{
      console.log(data);
      this.upcomingProgram = data.programList.filter(el => {
        if (el.image_path != '') {
          el.img_arr = el.image_path.split(',');
        }else{
          el.img_arr = this.profileDefaultImage;
        }
        el.convertedTime = new Date(el.program_date + 'Z');
        let a: any = new Date(el.program_date + 'Z');
        let b: any = new Date();
        let c: any ;
        
        if(a>b)
        {
         c = Math.abs(a - b)/1000;
        
        }else{
          c=0;
          el.live =true;
        }
        
        el.cd = c;

        setInterval(function () {
          if (parseInt(el.cd) > 0)
            el.cd = parseInt(el.cd) - 1;
            el.hh = ~~(el.cd / (60*60));
            el.mm =~~(el.cd  % 3600 / 60);
            el.ss = (el.cd % 3600 % 60);
        }, 1000)
        return el;
      });
      console.log(this.upcomingProgram);
    })
  }

  ngAfterViewInit() {   
    this.platform.backButton.subscribe(async () => {
      if (this.router.isActive('/tabs/user-profile', true) && this.router.url === '/tabs/user-profile') {
        navigator['app'].exitApp();
      }
    });
  } 
  ngOnDestroy() {  // this.backButtonSubscription.unsubscribe();
  
  }

  doRefresh(event) {
    this.ngOnInit();
    setTimeout(() => {
     
      event.target.complete();
    }, 2000);
  }

  nutritionModal(data) {
    this.commonService.presentModal(NutritionModalComponent, 'fullModal', { 'data': data });
  }

  like_bookmark(arr: any) {
    arr.filter((element, i) => {
      element.count = element.post_likes.length;
      element.post_likes.filter((f) => {
        if (f.user_id == this.userData.id) {
          element.liked = true;
        }
      });
      element.post_bookmarks.filter((f) => {
        if (f.user_id == this.userData.id) {
          element.bookmarked = true;
        }
      });
    });
    return arr;
  }

  notification1(){
    this.commonService.presentModal(FollowersComponent, 'fullModal', { 'profileData': this.profileData, 'otherUser': false });  
  }
  bookmarked(postId, bmStat, post_type) {
    //console.log(postId, bmStat);
    this.postData.forEach((element, i) => {
      if (element.id == postId) {
        this.postData[i].bookmarked = !bmStat;
      }
    });
    //console.log(postId, bmStat);
    this.commonService.bookmarkPost({ 'postId': postId, 'bookmark': bmStat, 'post_type': post_type }).subscribe((data: any) => {
      if (data.status) {
        this.commonService.presentToast(data.status);
      }
    });
  }
  liked(postId, likeStat) {
    this.postData.forEach((element, i) => {
      if (element.id == postId) {
        this.postData[i].liked = !likeStat;
        if (likeStat) {
          this.postData[i].count = (this.postData[i].count - 1);

        } else {
          this.postData[i].count = (this.postData[i].count + 1);
        }
      }
    });
    this.postData.likedPost({ 'postId': postId, 'liked': likeStat }).subscribe((data: any) => {
      if (data.status) {
        this.commonService.presentToast(data.status);
      }
    });
  }
}
