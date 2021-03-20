import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { NutritionModalComponent } from '../user-profile/nutrition-modal/nutrition-modal.component';
import { SettingsService } from './../services/settings.service';
import { PeopleViewService } from './../services/people-view.service';
import { NavController, IonInfiniteScroll } from '@ionic/angular';
import { Config } from './../config/config';
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';

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
    private navCtrl: NavController) { }

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
          } else if (element.post_type == 2) {
            this.bookmarkVideo.push(element);
          }
        }  
      }); 
    });
  }

  nutritionModal(data) {
    this.commonService.presentModal(NutritionModalComponent, 'fullModal', { 'data': data });
  }

  liked(postId, likeStat) {
    this.bookmarkPost.forEach((element, i) => {

      if (element.id == postId) {
        this.bookmarkPost[i].liked = !likeStat;
        if (likeStat) {
          this.bookmarkPost[i].count = (this.bookmarkPost[i].count - 1);

        } else {
          this.bookmarkPost[i].count = (this.bookmarkPost[i].count + 1);
        }
      }
    });
    console.log(postId);
    console.log(likeStat);
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
      if (element.id == postId) {
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
  
  goBack() {
    this.navCtrl.back();
  }
}