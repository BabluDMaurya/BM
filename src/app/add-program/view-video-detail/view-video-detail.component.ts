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
  videoDataPath : any = '';
  title : string;
  description : string;
  createdAt : any;
  publishBy: any;
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
  allPostData: any;
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
    var vId = this.videoIds.split(',');
    console.log(this.videoDataPath);
    this.noImgData = true;
      console.log(this.navParams.data);
      this.postService.getProgVideoPostById({'postId':vId[0],'videoId': this.videoIds}).subscribe((data)=>{
      this.postData = data.postData.videoData;
      this.allPostData = data.postData.allVideoData;
      this.videoDataPath =  this.storagePath + data.postData.videoData.video_post[0].video_path; 
      console.log(this.videoDataPath);
      this.postUserId = data.postData.videoData.user_id;

      this.disableComment = data.postData.videoData.disable_comment
      this.title = data.postData.videoData.video_post[0].title;
      this.description = data.postData.videoData.video_post[0].description;
      this.createdAt = data.postData.videoData.created_at;
      this.publishBy = data.postData.videoData.post_user.user_name;
      this.commentCount = data.postData.videoData.total_comments.length;
      this.postLikesCount = data.postData.videoData.post_likes.length;
      this.likePost = (data.postData.videoData.post_likes.user_id == this.postUserId ? 'true' : 'false');      
      
      this.videoThumbPath =  this.storagePath + data.postData.videoData.video_post[0].thumb_path; 
      this.videoType = data.postData.videoData.video_post[0].video_type;
      // console.log("this.videoType: " + this.videoType);
      this.noImgData = false;
     

      // this.postData.post_bookmarks.filter((f) => {
      //   if (f.user_id == this.loginUserData.id) {
      //     this.bookmark = true;
      //   }
      // });     
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
  playNextVideo(id){
    this.videoDataPath = '';
    this.postService.getProgVideoPostById({'postId':id,'videoId': this.videoIds}).subscribe((data)=>{
      this.postData = data.postData.videoData;
      this.allPostData = data.postData.allVideoData;
      this.videoDataPath =  this.storagePath + data.postData.videoData.video_post[0].video_path; 
      console.log(data);
      this.postUserId = data.postData.videoData.user_id;

      this.disableComment = data.postData.videoData.disable_comment
      this.title = data.postData.videoData.video_post[0].title;
      this.description = data.postData.videoData.video_post[0].description;
      this.createdAt = data.postData.videoData.created_at;
      this.publishBy = data.postData.videoData.post_user.user_name;
      this.commentCount = data.postData.videoData.total_comments.length;
      this.postLikesCount = data.postData.videoData.post_likes.length;
      this.likePost = (data.postData.videoData.post_likes.user_id == this.postUserId ? 'true' : 'false');      
      
      this.videoThumbPath =  this.storagePath + data.postData.videoData.video_post[0].thumb_path; 
      this.videoType = data.postData.videoData.video_post[0].video_type;
      // console.log("this.videoType: " + this.videoType);
      this.noImgData = false;
     

      // this.postData.post_bookmarks.filter((f) => {
      //   if (f.user_id == this.loginUserData.id) {
      //     this.bookmark = true;
      //   }
      // });     
      console.log(this.postData);
    });
  }
  closeModal() {
    this.commonService.dismissModal();
  }

}
