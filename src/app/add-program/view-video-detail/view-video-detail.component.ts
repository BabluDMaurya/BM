import { Component, OnInit,ViewChild } from '@angular/core';
import { CommonService } from '../../services/common.service';

import { Config } from './../../config/config'
import { NavParams,IonSlides } from '@ionic/angular';
import { PostService } from '../../services/post.service'; 
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
const baseUrl = Config.ApiUrl;
@Component({
  selector: 'app-view-video-detail',
  templateUrl: './view-video-detail.component.html',
  styleUrls: ['../../app.component.scss','./view-video-detail.component.scss'],
})
export class ViewVideoDetailComponent implements OnInit {
  videoDetails: any; 
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
  noData : boolean = false;
  noImgData : boolean = false;
  videoIds: any;
  constructor(public commonService: CommonService,
    public navParams: NavParams,
    private postService : PostService,
    private streamingMedia : StreamingMedia,) { 
      this.loginUserData = JSON.parse(localStorage.getItem('userData')); 
      this.storagePath = baseUrl+'storage/';
    }

  ngOnInit() {
    this.postID = this.navParams.data.details;
    this.videoIds = this.navParams.data.videoIds;
    this.noImgData = true;
      console.log(this.navParams.data);
      this.postService.getProgVideoPostById({'postId':this.postID,'videoId': this.videoIds}).subscribe((data)=>{
      this.postData = data.postData;
      console.log(data);
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
      // console.log("this.videoType: " + this.videoType);
      this.noImgData = false;
      // if(this.type != 'exclusive'){
      //   this.commonService.presentLoader();
      //   this.peopleView.upNextPost('2', this.postUserId, this.videoType,this.postID).subscribe((data) => {
      //       this.upNext = data.postData;
      //       this.commonService.dismissLoader();
      //       if(this.upNext.length < 1){
      //         this.noData = true;
      //       }
      //   }); 
      // } 
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
  closeModal() {
    this.commonService.dismissModal();
  }

}
