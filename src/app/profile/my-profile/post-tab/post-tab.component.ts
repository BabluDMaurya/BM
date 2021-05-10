import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PeopleViewService } from './../../../services/people-view.service';
import { CommonService } from './../../../services/common.service';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { IonInfiniteScroll } from '@ionic/angular';
import { Config } from './../../../config/config';
import { ModalController, PopoverController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
import { PopoverComponent } from '../../popover/popover.component';

@Component({
  selector: 'app-post-tab',
  templateUrl: './post-tab.component.html',
  styleUrls: ['./post-tab.component.scss', './../../../app.component.scss'],
})
export class PostTabComponent implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;
   // Constructor
  constructor(private peopleService: PeopleViewService,
    private actRoute: ActivatedRoute,
    private commonService: CommonService,
    public modalController: ModalController,
    public popoverController: PopoverController,
  ) {
    //  console.log(el);
  }
  myPosts: any; 
  last_page: any;
  currentPage: any = 0;
  gotData: any = false;
  consultID: any;
  loginUserData: any;
  expanded = 0;
  url: any = Config.imgUrl;
  profilePicUrl = Config.profilePic;
  @Input() userData: any;
  profileDefaultImage = './../../../assets/images/user.jpg';
  ngOnInit() {
   
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      if (params.get('userData')) {
        this.consultID = params.get('userData');
      } else {
        this.consultID = '';
      }

    });
    this.postData();
    this.commonService.footerTabHooks.subscribe(data=>{
      
      if(data)
      {    this.myPosts = null;
        this.gotData = false;
        this.postData();
      }
    });
  }

  postRefresh(event) {
    this.postData(); 
    event.target.complete(); 
  }

  /**
   * get post according userid
   */
  postData() {
    this.loginUserData = JSON.parse(localStorage.getItem('userData'));
    this.peopleService.getMyPost('1,8', this.userData.userData.id, 1).subscribe((data: any) => {
      this.myPosts = data.posts.data;
      this.myPosts.forEach((element, i) => {
        this.myPosts[i].count = element.post_likes.length;
        element.post_likes.filter((f) => {
          if (f.user_id == this.loginUserData.id) {
            this.myPosts[i].liked = true;
          }
        });
        element.post_bookmarks.filter((f) => {
          if (f.user_id == this.loginUserData.id) {
            this.myPosts[i].bookmarked = true;
          }
        });
      });
      this.last_page = data.posts.last_page;
      this.currentPage = data.posts.current_page;
      this.gotData = true;
    });
  }

  // ------------ laod data event ----------
  /**
   *laod data event according userid
   */
  loadData(event) {
    setTimeout(() => {
      if (this.currentPage > 0) {
        this.peopleService.getMyPost('1,8', this.consultID, (this.currentPage + 1)).subscribe((data: any) => {

          //  console.log(data);
          data.posts.data.forEach((element, i) => {
            element.count = element.post_likes.length;

            element.post_likes.filter((f) => {
              // console.log(f);
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
          //  console.log(this.myPosts);
        });
      }

      event.target.complete();
      if (this.last_page <= (this.currentPage + 1)) {
        event.target.disabled = true;
      }
    }, 500);
  }
 
  /**
  * Liked unliked funcitonality
  */
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
    this.peopleService.likedPost({ 'postId': postId, 'liked': likeStat }).subscribe((data: any) => {
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
    this.myPosts.forEach((element, i) => {
      if (element.id == postId) {
        this.myPosts[i].bookmarked = !bmStat;
      }
    }); 
    //console.log(postId, bmStat);
    this.peopleService.bookmarkPost({ 'postId': postId, 'bookmark': bmStat, 'post_type':post_type }).subscribe((data: any) => {
      if (data.status) {
        this.commonService.presentToast(data.status);
      }
    });
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

  async showOptions(ev: any, commentStatus) {
    //    this.commonService.showPopover( PopoverComponent, 'custom-popover',{'postId':ev , 'commentStatus':commentStatus});

    const popover = await this.popoverController.create({
      component: PopoverComponent,
      translucent: true,
      cssClass: 'custom-popover',
      componentProps: { 'postId': ev, 'commentStatus': commentStatus }
    });
    popover.onDidDismiss().then((data) => {
      console.log(commentStatus);
      if (data.data.click == 1) {
        console.log(this.myPosts);
        this.myPosts.forEach((f, i) => {
          if (f.id == ev) {
            this.myPosts[i].is_delete = 1;
          }
        });
      } else if (data.data.click == 2) {
        console.log(this.myPosts);
        this.myPosts.forEach((f, i) => {
          if (f.id == ev) {
            this.myPosts[i].disable_comment = !commentStatus;
          }
        });

        console.log(this.myPosts);
      }
    });
    // console.log(ev);
    return await popover.present();
  }
}
