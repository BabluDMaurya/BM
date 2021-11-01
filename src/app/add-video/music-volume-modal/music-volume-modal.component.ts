import { Component, OnInit, NgZone, Input } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { SettingsService} from '../../services/settings.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import {Storage} from '@ionic/storage';
import { Config } from "../../config/config";
import {Router} from '@angular/router';
import { PostService } from '../../services/post.service';
import { NavController } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
const baseUrl = Config.ApiUrl;
@Component({
  selector: 'app-music-volume-modal',
  templateUrl: './music-volume-modal.component.html',
  styleUrls: ['./../../app.component.scss','./music-volume-modal.component.scss'],
})
export class MusicVolumeModalComponent implements OnInit {
  @Input() furl;
  @Input() fname;
  @Input() selectedVideo;
  @Input() returnUrl;  
  @Input () fTitle;
  @Input () fDescription;
  @Input () fSelectedMusicId;
  @Input () fSelectedGeneras;
  
  
  disableButton = false;
  complete: boolean = false;
  data: any; 
  uploadedVideo: string; 
  isUploading: boolean = false;
  uploadPercent: number = 0;
  error : any;
  errorMessage : any;
  title : any;
  description : any;
  selectedMusicId : any;
  selectedGeneras : any;
  musicVolume : any;
  selectedVolume = 50;
  videoData : any;
  uploadedVideoThumb : any;  
  buttonDisable : boolean = false;
  videoFileUpload: FileTransferObject;  
  
  constructor( 
    public router: Router,
    public commonService: CommonService,
    public settingsService: SettingsService,
    private ngZone:NgZone,
    private transfer: FileTransfer,
    public storage:Storage,
    private postService:PostService,
    private navCtrl:NavController,private androidPermissions: AndroidPermissions,
    ) { }
    volumeSelected(volume){
      this.selectedVolume = volume;
    }
    uploadVideo(){
      // this.filePermission();
      var options: FileUploadOptions = {
        fileName: this.fname,
        fileKey: "video",
        mimeType: "video/mp4",
        httpMethod: "POST",
        chunkedMode: false,   
        headers : {"Authorization": "Bearer " + localStorage.getItem('userToken')},
        params : {
          title : this.fTitle,
          description : this.fDescription,
          selectedMusicId : this.fSelectedMusicId,
          selectedGeneras : this.fSelectedGeneras,
          musicVolume : this.selectedVolume,
        }
      }
      // const fileTransfer: FileTransferObject = this.transfer.create();
      this.videoFileUpload = this.transfer.create();
      this.isUploading = true;      
      this.buttonDisable = true;
      
      this.videoFileUpload.upload(this.selectedVideo, this.furl, options)
        .then((data)=> {
          this.isUploading = false;
          this.uploadPercent = 0;    
          return JSON.parse(data.response);          
        }).then((data) => {
          this.uploadedVideo = JSON.stringify(data.postId);           
          this.commonService.dismissModal();
          this.postService.getVideoPostById({'videoId':this.uploadedVideo}).subscribe((data:any)=>{ 
            localStorage.setItem('videoPath',data.postData.video_path);
            localStorage.setItem('videoThumb',data.postData.thumb_path);
            localStorage.setItem('videoDescription',data.postData.description);
            localStorage.setItem('videoTitle',data.postData.title);
            this.router.navigate([this.returnUrl,this.uploadedVideo]);
            // this.commonService.redirectUrlWithIdConfirm("Success", "Video Uploaded Successfully.",this.returnUrl,this.uploadedVideo);                
          });                  
        }).catch((err)=> {          
          this.isUploading = false;
          this.buttonDisable = false;
          this.uploadPercent = 0;
          this.commonService.dismissModal();
          this.error = JSON.stringify(err);
          console.log("this.error: "+ this.error);
            if(this.error){
              this.errorMessage = "Video not uploaded. Please try again";
            }else{
              this.errorMessage = 'Some thing wrong.Please try again';
            }
          this.commonService.presentAlert("Error", this.errorMessage,["Ok"],'');
        });
  
        this.videoFileUpload.onProgress((data) => {
          this.disableButton = true;
          this.ngZone.run(() => {
            this.uploadPercent = Math.round((data.loaded / data.total)* 100);
          });
      });
    }
    cancelUpload() {
      this.videoFileUpload.abort();
      this.uploadPercent = 0;
    }
  ngOnInit() {
    
  }
  filePermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
      result => console.log('Has permission?', result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
    );
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(
      result => console.log('Has permission?', result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
    );

  }

  goBack() {
    this.navCtrl.back();
  }

}