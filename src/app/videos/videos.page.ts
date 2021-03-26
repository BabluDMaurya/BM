import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { UserModalComponent } from '../add-program/user-modal/user-modal.component';
import { Router, ActivatedRoute, ParamMap} from "@angular/router";
import { Config } from "../config/config";
import { PostService } from '../services/post.service'; 
import { NavController } from '@ionic/angular';
import { PeopleViewService } from './../services/people-view.service';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
const baseUrl = Config.ApiUrl;

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./../app.component.scss','./videos.page.scss'],
})
export class VideosPage implements OnInit {
  info = false;  
  likePost : any; 
  postID : any;   
  postData : any;
  videoDataPath :any;
  title : string;
  description : string;
  createdAt : any;
  commentCount : any;
  postLikesCount : any;
  disableComment : any;
  myPosts: any;
  loginUserData : any;
  videoType : any;
  upNext : any;
  storagePath : string;
  videoThumbPath : any;
  postUserId : number;
  type : any;
  bookmark:any=false;
  constructor(
    public commonService: CommonService,
    private actRoute: ActivatedRoute,
    private postService : PostService,
    private peopleView: PeopleViewService,
    private streamingMedia : StreamingMedia,
    private navCtrl: NavController
    ) {          
      this.actRoute.paramMap.subscribe((params: ParamMap) => {                 
        this.postID = params.get('id');
        this.type = params.get('type');    
      });   
      this.loginUserData = JSON.parse(localStorage.getItem('userData')); 
      this.storagePath = baseUrl+'storage/';
     }
  
  ngOnInit() {
      this.postService.getPostById({'postId':this.postID}).subscribe((data)=>{
      this.postData = data.postData;
      
      this.postUserId = data.postData.user_id;

      this.disableComment = data.postData.disable_comment
      this.title = data.postData.video_post[0].title;
      this.description = data.postData.video_post[0].description;
      this.createdAt = data.postData.created_at;
      this.commentCount = data.postData.total_comments.length;
      this.postLikesCount = data.postData.post_likes.length;
      this.likePost = (data.postData.post_likes.user_id == this.postUserId ? 'true' : 'false');      
      this.videoDataPath =  this.storagePath + data.postData.video_post[0].video_path; 
      this.videoThumbPath =  this.storagePath + data.postData.video_post[0].thumb_path; 
      this.videoType = data.postData.video_post[0].video_type;
      if(this.type != 'exclusive'){
        this.peopleView.upNextPost('2', this.postUserId, this.videoType,this.postID).subscribe((data) => {
            this.upNext = data.postData;
        }); 
      } 

      this.postData.post_bookmarks.filter((f) => {
        if (f.user_id == this.loginUserData.id) {
          this.bookmark = true;
        }
      });
     
      console.log(this.postData);
    });
  }
  playVideo(){
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape',//protrait or landscape
      shouldAutoClose: true,
      controls: true
    };
    
    this.streamingMedia.playVideo(this.videoDataPath, options);
  }
  liked(postId, likeStat) {    
        this.likePost = !likeStat;
        if (likeStat) {
          this.postLikesCount = (this.postLikesCount - 1);
          console.log(this.postLikesCount);
        } else {
          this.postLikesCount = (this.postLikesCount + 1);
          console.log(this.postLikesCount);
        }     
    this.peopleView.likedPost({ 'postId': postId, 'liked': likeStat }).subscribe((data: any) => {
      if (data.status) {
        this.commonService.presentToast(data.status);
      }
    });
  }
  shareModal(){
    this.commonService.presentModal(UserModalComponent,'fullModal','');
  }

  addBookmark(){
    this.peopleView.bookmarkPost({ 'postId': this.postID, 'bookmark': this.bookmark ,'post_type':2 }).subscribe((data: any) => {
      if (data.status) {
        this.bookmark=!this.bookmark;
        this.commonService.presentToast(data.status);
      }
    });
  }

    //------------------ -- GO BACK  ------------
    goBack() {
      this.navCtrl.back();
    }

}
