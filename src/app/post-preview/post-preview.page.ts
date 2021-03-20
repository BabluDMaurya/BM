import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PostService } from './../services/post.service' 
import { Router, ActivatedRoute, ParamMap} from "@angular/router";
import { Config } from './../config/config'
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.page.html',
  styleUrls: ['./../app.component.scss','./post-preview.page.scss'],
})
export class PostPreviewPage implements OnInit {
  like = 1;
  bookmark1 = 1;
  consultID:any;
  postData:any;
  loginUserData:any;
  url:any =Config.imgUrl;
  
profile_url:any = Config.profilePic;
  allowBookmark:any;
  expanded;
  skeleton:boolean =true;
  gotData:boolean=false;
  constructor(public navCtrl: NavController,
    private actRoute: ActivatedRoute,
    private postService : PostService,
    public modalController: ModalController,) { }

  ngOnInit() {
    
    this.loginUserData = JSON.parse(localStorage.getItem('userData'));
    this.actRoute.paramMap.subscribe((params: ParamMap) => {                 
      this.consultID = params.get('postId');
    });
    if (this.consultID!= this.loginUserData.id) {
      this.allowBookmark = true;
    }
    this.postService.getPostById({'postId':this.consultID}).subscribe((data)=>{
      this.postData = data.postData;
      this.skeleton =false;
      this.postData.count = this.postData.post_likes.length;
      this.postData.post_likes.filter((f) => {

        if (this.postData.user_id == this.loginUserData.id) {
          this.postData.liked = true;
        }
      });

      this.postData.post_bookmarks.filter((f) => {
        if (this.postData.user_id == this.loginUserData.id) {
          this.postData.bookmarked = true;
        }
      });
    },err=>{
      this.skeleton =false;
    });
    this.gotData =true;
    console.log(this.postData);
    console.log('this.postData');
  }
  goBack() {
    this.navCtrl.back();
  }
  async openViewer(path) {
    console.log(this.url+path);
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: this.url+path, // required
        srcHighRes: this.url+path,
        srcFallback:this.url+path
      },
      cssClass: 'ion-img-viewer', // required
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }
}
