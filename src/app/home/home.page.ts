import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Config } from '../config/config';
import { ModalController, PopoverController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
import { CommonService } from '../services/common.service';
import { PopoverComponent } from '../profile/popover/popover.component';
import { SearchService } from '../services/search.service';
import { NavigationExtras } from '@angular/router';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss', './../app.component.scss'],
})
export class HomePage implements OnInit {
  defaultPostImage : any = './../../assets/images/loading.jpg';
  defaultCatImage : any = './../../assets/images/activity.png';
  defaultConsultantBackgroundImage : any = './../../assets/images/bgimage.png';
  defaultUserImage : any = './../../assets/images/user.jpg';
  postImage :any;
  postData: any = [];
  loadPostData :any = [];
  gotData: boolean = false;
  url = Config.imgUrl;
  consultantBackgroundImag  = Config.backgroundPic;
  userPPicurl = Config.profilePic;
  caturl = this.url+'public/';
  storagePath = Config.storagePath;
  consultID: any;
  last_page: any;
  currentPage: any = 0;
  loginUserData: any;
  topTenPeople: any;
  specialities: any;
  remainingTopConsultent : any;
  sliderOpts = {
    zoom: true,
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 2, 
  }
  constructor(
    private homeService: HomeService,
    public commonService: CommonService,
    public modalController: ModalController,
    public searchService: SearchService,
    public popoverController: PopoverController,
    //public router:Router
  ) { }

  ngOnInit() {
    this.commonService.presentLoader();
    this.loginUserData = this.commonService.getUserData();
    this.currentPage = 0;
    
    if(this.loginUserData) {

    this.searchService.getSpecialities(null).subscribe(data => {
      this.specialities = data.list;
    });

    this.homeService.getHomeContent({ 'page': (this.currentPage) }).subscribe(data => {     
      let postData = this.like_bookmark(data.postData.data);
      this.last_page = data.postData.last_page;
      this.currentPage = data.postData.current_page;
      this.searchService.getTopConsultant().subscribe((data: any) => {
        this.postData = [];
        let topPeople = data.topuser;        
        postData.filter((el, i) => {
          if (i % 5 == 0) {
            this.postData.push(topPeople.splice(0, 2));
          }
          this.postData.push(el)
        });
        this.remainingTopConsultent = topPeople;
        console.log(this.postData);
      });
      if(postData.length < 1){
        this.gotData = true;
      }
      this.commonService.dismissLoader();
    });

  } else {

    this.searchService.getHomeSpecialities(null).subscribe(data => {
      this.specialities = data.list;
    });

    this.homeService.getGuestHomeContent({ 'page': (this.currentPage) }).subscribe(data => {
      let postData = data.postData.data;
      this.last_page = data.postData.last_page;
      this.currentPage = data.postData.current_page;
      this.searchService.getGuestTopConsultant().subscribe((data: any) => {
        this.postData = [];
        let topPeople = data.topuser;        
        postData.filter((el, i) => {
          if (i % 5 == 0) {
            this.postData.push(topPeople.splice(0, 2));
          }
          this.postData.push(el)
        });
        this.remainingTopConsultent = topPeople;
        console.log(this.postData);
      });
      if(postData.length < 1){
        this.gotData = true;
      }
      this.commonService.dismissLoader();
    });
  }

    
  }

  
  // ------------ laod data event ----------
  /**
   *laod data event according userid
   */
  loadData(event) {   
    setTimeout(() => {
      if (this.currentPage > 0) {
        this.homeService.getHomeContent({ 'page': (this.currentPage + 1) }).subscribe((data: any) => {
          event.target.complete();
          if(this.remainingTopConsultent.length > 1){
            this.loadPostData = [];
          let postData = this.like_bookmark(data.postData.data);
          postData.filter((el, i) => {
            if (i % 5 == 0) {
              this.loadPostData.push(this.remainingTopConsultent.splice(0, 2));
            }
            this.loadPostData.push(el)
          });
          this.postData = this.postData.concat(this.loadPostData);
          }else{
            this.postData = this.postData.concat(this.like_bookmark(data.postData.data));
          }
          console.log(this.postData);
          console.log('postData');
          this.remainingTopConsultent = this.remainingTopConsultent;

          this.last_page = data.postData.last_page;
          this.currentPage = data.postData.current_page;
        });
      }
      if (this.last_page <= (this.currentPage + 1)) {
        event.target.disabled = true;
      }
    }, 500);
  }

  doRefresh(event) {
    this.ngOnInit();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  async openViewer(path) {
    //console.log(this.url + path);
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: this.url + path, // required
        srcHighRes: this.url + path,
        srcFallback: this.url + path
      },
      cssClass: 'ion-img-viewer', // required
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }

  /**
  * Liked unliked funcitonality
  */
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
    this.commonService.likedPost({ 'postId': postId, 'liked': likeStat }).subscribe((data: any) => {
      if (data.status) {
        this.commonService.presentToast(data.status);
      }
    });
  }

  /**
  * Bookmarked funcitonality
  */
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

  async showOptions(ev: any, commentStatus) {
    //    this.commonService.showPopover( PopoverComponent, 'custom-popover',{'postId':ev , 'commentStatus':commentStatus});
    console.log("commentStatus : "+ commentStatus);
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      translucent: true,
      cssClass: 'custom-popover',
      componentProps: { 'postId': ev, 'commentStatus': commentStatus }
    });
    popover.onDidDismiss().then((data) => {
      if (data.data.click == 1) {
        this.postData.forEach((f, i) => {
          if (f.id == ev) {
            this.postData[i].is_delete = 1;
          }
        });
      } else if (data.data.click == 2) {
        this.postData.forEach((f, i) => {
          if (f.id == ev) {
            this.postData[i].disable_comment = !commentStatus;
          }
        });

      }
    });
    // console.log(ev);
    return await popover.present();
  }

  like_bookmark(arr: any) {
    arr.filter((element, i) => {
      element.count = element.post_likes.length;
      element.post_likes.filter((f) => {
        if (f.user_id == this.loginUserData.id) {
          element.liked = true;
        }
      });
      element.post_bookmarks.filter((f) => {
        if (f.user_id == this.loginUserData.id) {
          element.bookmarked = true;
        }
      });
    });
    return arr;
  }
 

}
