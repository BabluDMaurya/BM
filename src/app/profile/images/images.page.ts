import { Component, OnInit, ViewChild } from '@angular/core';
import { PeopleViewService } from './../../services/people-view.service';
import { CommonService } from './../../services/common.service';
import { SettingsService } from './../../services/settings.service';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { NavController, IonInfiniteScroll } from '@ionic/angular';
import { Config } from './../../config/config';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-images',
  templateUrl: './images.page.html',
  styleUrls: ['./../../app.component.scss', './images.page.scss'],
})
export class ImagesPage implements OnInit {
  bookmark = true;
  consultID: any;
  myPosts: any
  last_page: any;
  currentPage: any = 0;
  gotData: any = false;
  userData: any;
  userName: any;
  loginUserData: any;
  total: any;
  url:any=Config.imgUrl;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;
  constructor(private peopleView: PeopleViewService,
    private actRoute: ActivatedRoute,
    private settingsService: SettingsService,
    public modalController: ModalController,
    private commonService: CommonService,
    private navCtrl: NavController) { }

  ngOnInit() {

    this.loginUserData = JSON.parse(localStorage.getItem('userData'));

    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      this.consultID = params.get('userId');
    });
    this.peopleView.getUserData({ 'userId': this.consultID }).subscribe((data: any) => {
      this.userData = data;

      this.userName = data.userData.user_name;

      this.gotData = true;
    });
    this.peopleView.getMyPost('1', this.consultID, 1).subscribe((data: any) => {
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
      console.log(this.myPosts);
      this.last_page = data.posts.last_page;
      this.currentPage = data.posts.current_page;
      this.total = data.posts.total;
      this.gotData = true;
    });

  }
  ionViewWillEnter() {

  }

  // ------------ laod data event ----------

  loadData(event) {
    setTimeout(() => {
      if (this.currentPage != 0) {
        this.peopleView.getMyPost('1,2', this.consultID, (this.currentPage + 1)).subscribe((data: any) => {
          data.posts.data.forEach((element, i) => {
            element.count = element.post_likes.length;
            element.post_likes.filter((f) => {
              console.log(f);
              if (f.user_id == this.loginUserData.id) {
                data.posts.data[i].liked = true;
              }
            })
          });
          this.myPosts = this.myPosts.concat(data.posts.data);
          this.last_page = data.posts.last_page;
          this.currentPage = data.posts.current_page;
          console.log(this.myPosts);
        });
      }
      event.target.complete();
      if (this.last_page == (this.currentPage + 1)) {
        event.target.disabled = true;
      }
    }, 10);
  }

  //-------------------- LIke event

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
   //-------------------- BOOkmarked event

   bookmarked(postId, bmStat , post_type) {
    this.myPosts.forEach((element, i) => {
      if (element.id == postId) {
        this.myPosts[i].bookmarked = !bmStat;
      }
    });
    this.peopleView.bookmarkPost({ 'postId': postId, 'bookmark': bmStat , 'post_type':post_type}).subscribe((data: any) => {
      if (data.status) {
        this.commonService.presentToast(data.status);
      }
    });
  }
  async openViewer(path) {
    console.log(this.url+path);
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: this.url+path, // required
      
      },
      cssClass: 'ion-img-viewer', // required
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }

  //------------------ -- GO BACK  ------------
  goBack() {
    this.navCtrl.back();
  }

}
