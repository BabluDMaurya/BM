import { Component, OnInit, HostListener  } from '@angular/core';
import { CommonService } from '../services/common.service';
import { NutritionModalComponent } from '../user-profile/nutrition-modal/nutrition-modal.component';
import { SettingsService } from './../services/settings.service';
import { PeopleViewService } from './../services/people-view.service';
import { NavController, IonInfiniteScroll } from '@ionic/angular';
import { Config } from './../config/config';
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
import { PostService } from './../services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookmarkPostCommentComponent } from '../bookmark/bookmark-post-comment/bookmark-post-comment.component';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.page.html',
  styleUrls: ['./../app.component.scss', './bookmark.page.scss'],
})


export class BookmarkPage implements OnInit {
  bookmarkPost: any;
  loginUserData: any;
  bookmarkImg = [];
  bookmarkVideo = [];
  bookmarkProg=[];
  url: any = Config.imgUrl;
  profile_url: any = Config.profilePic;
  storagePath: any = Config.storagePath; 
  bookmarkBlock: string = 'images';

  constructor(public commonService: CommonService,
    private settingService: SettingsService,
    private peopleService: PeopleViewService,
    public modalController: ModalController,
    public postService: PostService,
    private navCtrl: NavController,
    private location: Location,
    public router: Router,) { router.events.subscribe();
      console.log(this.router.url);
    }

  tabs(ev: any) {
    this.bookmarkBlock = ev.detail.value;
  }
  
  
  ngOnInit() {
    this.loginUserData = JSON.parse(localStorage.getItem("userData"));
    this.settingService.getBookmarkPost().subscribe((data: any) => {
      this.bookmarkPost = data.posts; 
      this.bookmarkPost.forEach((element, i) => {
    
        if(element.post_type == 5)
        {
          element.programs.convertedTime = new Date(element.programs.program_date + 'Z');
          this.bookmarkProg.push(element);
        }else{
          this.bookmarkPost[i].count = element.posts.post_likes.length;
          element.posts.post_likes.filter((f) => {
            if (f.user_id == this.loginUserData.id) {
              this.bookmarkPost[i].liked = true;
            }
          }); 
          element.posts.post_bookmarks.filter((f) => {
            if (f.user_id == this.loginUserData.id) {
              this.bookmarkPost[i].bookmarked = true;
            }
          }); 
          if (element.post_type == 1) {
            this.bookmarkImg.push(element);
            this.bookmarkImg.forEach((element, i) => {
              console.log(element.posts.total_comments.length);
              this.bookmarkImg[i].Tcount = element.posts.total_comments.length;
              // this.postService.getComment({'postId' : element.id }).subscribe(
              //   (data: any) => {
              //     var iCount = data.count;
              //     this.bookmarkImg[i].Tcount = iCount;
              //     // this.data = true;
              //   //  this.comment = data.status;
              //   //  var count = data.count;
              //   //  console.log(count);
              //   //  console.log('hh' + element.id);
              //   });
                // console.log(this.bookmarkImg[i]);
            });
          } else if (element.post_type == 2) {
            this.bookmarkVideo.push(element);
            this.bookmarkVideo.forEach((element, i) => {
              // this.postService.getComment({'postId' : element.id }).subscribe(
              //   (data: any) => {
              //     var cCount = data.count;
                  this.bookmarkVideo[i].Tcount = element.posts.total_comments.length;
              //     // this.data = true;
              //   //  this.comment = data.status;
              //   //  var count = data.count;
              //   //  console.log(count);
              //   //  console.log('hh' + element.id);
              //   });
                console.log(this.bookmarkImg[i]);
            });
            
            // console.log(this.bookmarkVideo);
          }
        }  
      }); 
    });
  }
  
  nutritionModal(data) {
    this.commonService.presentModal(NutritionModalComponent, 'fullModal', { 'data': data });
  }

  liked(postId, likeStat) {
    // console.log(this.bookmarkPost);
    this.bookmarkPost.forEach((element, i) => {
      console.log(element.post_id + 'eid');
      console.log(postId + 'pid');
      if (element.post_id == postId) {
        this.bookmarkPost[i].liked = !likeStat;
        if (likeStat) {
          this.bookmarkPost[i].count = (this.bookmarkPost[i].count - 1);

        } else {
          this.bookmarkPost[i].count = (this.bookmarkPost[i].count + 1);
        }
      }
    });
    // console.log(postId);
    // console.log(likeStat);
    this.peopleService.likedPost({ 'postId': postId, 'liked': likeStat }).subscribe((data: any) => {
      if (data.status) {
        this.commonService.presentToast(data.status);
      }
    });

  }
  // ----------- Bookmarked start here -----------
  bookmarked(postId, bmStat, post_type) {
    console.log(postId, bmStat);
    this.bookmarkPost.forEach((element, i) => {
      if (element.post_id == postId) {
        this.bookmarkPost[i].bookmarked = !bmStat;
      }
    });

    console.log(postId, bmStat);
    this.peopleService.bookmarkPost({ 'postId': postId, 'bookmark': bmStat, 'post_type': post_type }).subscribe((data: any) => {
      if (data.status) {
        this.commonService.presentToast(data.status);
      }
    });
  }

  async openViewer(path) {
    console.log(this.url + path);
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: this.url + path, // required 
      },
      cssClass: 'ion-img-viewer', // required
      keyboardClose: true,
      showBackdrop: true
    }); 
    return await modal.present();
  }
  async postComment(postId){

    const modal = await this.modalController.create({
     component: BookmarkPostCommentComponent,
     cssClass: 'fullModal',
     componentProps: { 'details':postId}

   });
   modal.onDidDismiss().then((d: any) => {
     console.log(d.data[0].getpostId);
    // this.ngOnInit();
    this.bookmarkVideo.forEach((element, i) => {
      if(this.bookmarkVideo[i].post_id == d.data[0].getpostId){
        this.bookmarkVideo[i].Tcount = d.data[0].count;
      }

    });
    this.bookmarkImg.forEach((element, i) => {
      if(this.bookmarkImg[i].post_id == d.data[0].getpostId){
        this.bookmarkImg[i].Tcount = d.data[0].count;
      }
          // console.log(element);
          // console.log(this.bookmarkImg[i]);

    });
 });
   return await modal.present();

}  
  goBack() {
    this.navCtrl.back();
  }
  
  
}