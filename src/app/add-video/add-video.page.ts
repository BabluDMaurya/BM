import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { MusicVolumeModalComponent } from './music-volume-modal/music-volume-modal.component';
import { CommonService } from '../services/common.service';
import { UserModalComponent } from '../add-program/user-modal/user-modal.component';
import { NavController, LoadingController, Platform, ToastController} from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { Config } from "../config/config";
import { MusicService } from '../services/music.service';
import {Storage} from '@ionic/storage';
import { HttpHeaders } from "@angular/common/http";
import { NutritionService } from './../services/nutrition.service';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture/ngx';

const baseUrl = Config.ApiUrl;
const MAX_FILE_SIZE = 500 * 1024 * 1024;
const ALLOWED_MIME_TYPE = ["video/mp4", "video/3gpp", "video/3gp", "video/avi", "video/mov", "video/mkw"];

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.page.html',
  styleUrls: ['./../app.component.scss','./add-video.page.scss'],
})
export class AddVideoPage implements OnInit { 

  isSubmitted = false;
  videoForm: FormGroup;
  datagenres: any;  
  data: any;
  selectedAudioFile : string;  
  audioFile : string = 'public/storage/audio/into_20180418_173147_audio.mp3';
  audioFilename : string;
  audioFileDuration : string;
  curr_playing_file: MediaObject; 
  storageDirectory: any;  
  is_playing: boolean = false;
  is_in_play: boolean = false;
  is_ready: boolean = false;
  message: any;
  position: any = 0;
  get_duration_interval: any;
  get_position_interval: any;
  videoFileSelected : boolean = false;
  selectedVideo: string; 
  uploadedVideo: string; 
  isUploading: boolean = false;
  uploadPercent: number = 0;
  videoFileUpload: FileTransferObject; 
  showMusic: number = 1;
  musicTypes:string='music';
  selectMusicList:string='hiphop';
  title : string;
  description : string;
  activeMusic : number;
  activetab: number;
  musicId : number;
  activeMusicFileName : string; 
  searchMusicData : boolean = false;  
  musicChanged = 0;
  playList: any;
  playListData : any;
  customClass : any =0;
  song : any;
  songList = [];
  visibility : boolean = false;
  // public list: any = [];
  
  constructor(
    public commonService: CommonService,
    public musicService :MusicService,
    private platform: Platform,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private file: File,
    private transfer: FileTransfer,
    private media: Media,
    private camera: Camera,
    private ngZone:NgZone,
    private previewAnyFile: PreviewAnyFile,
    public formBuilder: FormBuilder,
    private datePipe: DatePipe,
    public storage:Storage,
    private nutritionService: NutritionService,
    private cd: ChangeDetectorRef,
    private mediaCapture: MediaCapture,
    ) { 
      // this.list = [
      //   { expanded: false },
      // ]; 
      this.platform.ready().then(() => {
        if (this.platform.is('ios')) {
          this.storageDirectory = this.file.dataDirectory;
        } else if (this.platform.is('android')) {
          this.storageDirectory = this.file.externalDataDirectory;
        } else {
          this.storageDirectory = this.file.cacheDirectory;
        }
      });
  }

  ngOnInit() {      
      this.videoForm = this.formBuilder.group({
        title: new FormControl('', Validators.compose([
          Validators.required,
          Validators.maxLength(250)
        ])),
        description: new FormControl('', Validators.compose([
           Validators.required,
          Validators.maxLength(1000)
        ]))        
      });                  
      // // this.prepareAudioFile();
      // this.playListeSelect(8);
      this.getGenres();
    }
    'validation_messages' = {
      title: [
        { type: 'required', message: 'Title is required.' },  
        { type: 'maxlength', message: 'Title cannot be more than 250 characters long' },      
    ],
      description: [
          { type: 'required', message: 'Description is required.' },
          { type: 'maxlength', message: 'Description cannot be more than 1000 characters long' },
      ],
  }
  submitForm() {
    this.isSubmitted = true;          
      if(this.selectedVideo == null){
        this.commonService.presentAlert("Video","Please select video then post !",['Close'],'');          
        return false;
      }else{                      
        this.getGenres();
        this .showMusic = 2;
      }   
  }
  get errorControl() {
    return this.videoForm.controls;
  }

  sliderOpts = {
      zoom:true,
      slidesPerView:3,
      centeredSlides:false,
      spaceBetween:5
  }

  ionViewWillEnter() {
      setTimeout(() => {
        this.data = { };
      }, 5000);
  }

  showLoader() {
    this.commonService.presentLoader();   
  }

  dismissLoader() {
    this.commonService.dismissLoader();
  }

  cancelSelection() {
    this.selectedVideo = null;
    this.uploadedVideo = null;
  }

  filepreview(){
    this.previewAnyFile.preview(this.selectedVideo)
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));
  }

  removefilepreview(){    
      this.selectedVideo = null;
  }
  refresh() {
    this.cd.detectChanges();
  }

  captureVideo(){
    let options: CaptureVideoOptions = { 
      limit: 1,
      duration: 600,
      quality : 0
     };
    this.mediaCapture.captureVideo(options)
      .then(
        async (data: MediaFile[]) => {  
          console.log("DAta: "+data[0].type);
          this.showLoader();
          this.uploadedVideo = null; 
          var filename = data[0].name;
          var dirpath = data[0].fullPath.substr(0, data[0].fullPath.lastIndexOf('/') + 1);
          dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;  
          this.selectedVideoFile(dirpath,filename);
          this.visibility = true;
        },
        (err: CaptureError) => console.error(err)
        );
  }
  selectVideo() {    
    const options: CameraOptions = {
      mediaType: this.camera.MediaType.VIDEO,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    this.camera.getPicture(options)
      .then( 
        
        async (videoUrl) => {
        if (videoUrl) {
          this.showLoader();
          this.uploadedVideo = null;          
          var filename = videoUrl.substr(videoUrl.lastIndexOf('/') + 1);         
          var dirpath = videoUrl.substr(0, videoUrl.lastIndexOf('/') + 1);
          dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;
          this.selectedVideoFile(dirpath,filename);
          this.visibility = true;
        }
      },
      (err) => {
        console.log(err);
        this.visibility = false;
        this.commonService.presentAlert("Plugin Error","Cordova not available",['Close'],'');
      }
      );
  }
 async selectedVideoFile(dirpath,filename){
    try {
      var dirUrl = await this.file.resolveDirectoryUrl(dirpath);
      var retrievedFile = await this.file.getFile(dirUrl, filename, {});           
    } catch(err) {
      this.dismissLoader();
      this.commonService.presentAlert("Error","Something went wrong.",['Ok'],'');
    }
    retrievedFile.file( data => {
        this.dismissLoader();
        if (data.size > MAX_FILE_SIZE){ return this.commonService.presentAlert("Error", "You cannot upload more than 100 mb.",['Ok'],'');}
        // if (data.type !== ALLOWED_MIME_TYPE) { return this.commonService.presentAlert("Error", "Incorrect file type.",["OK"]);}
        if(ALLOWED_MIME_TYPE.indexOf(data.type) == -1){return this.commonService.presentAlert("Error", "Incorrect file type.",["OK"],'');}
        this.selectedVideo = retrievedFile.nativeURL;
        localStorage.setItem('selectedVideo',JSON.stringify(this.selectedVideo));
        this.videoFileSelected = !this.videoFileSelected; 
        this.refresh();
    });
  }
  //----------------Music Code------------//
  searchChanged(musicname) {
    const searchTerm = musicname.srcElement.value;
    this.nutritionService.searchMusic({ "searchQuery": searchTerm }).subscribe(
      (search: any) => {
        if(searchTerm == ''){  
          this.searchMusicData = false;        
          this.getGenres();
        }else{
          this.datagenres = (search.musicList);
          this.searchMusicData = true;
        }  
      }
    )
  }
  getGenres(){
    this.musicService.getGenres().subscribe(
      (data: any) => {
        this.datagenres = data.genres;
      });
      this.selectMusicList = '1';
      this.activeMusic = 1;      
      this.activetab = 1;

      this.musicService.getPlaylist().subscribe((data: any) => {
        this.playList = data.status;
        console.log("this.playList: " + JSON.stringify(this.playList));
      });
  }
  playListeSelect(playListId : any,eltration : any){ 
    this.songList = [];  
    this.customClass = eltration;
    this.musicService.getPlaylistById({ "playlistId": playListId }).subscribe((data: any) => {
      this.playListData = data.status;
      data.status.playlist_songs.forEach(el => {
        this.songList.push(el.songs_details);        
      });     
      // console.log("this.songList:"+JSON.stringify(this.songList));
    },err =>{
      this.commonService.presentToast("Something went Wrong.");
    });
  }
  selectMusic(ev: any) {
    this.selectMusicList=ev.detail.value;   
  }

  musicSelect(ev: any){     
    this.activeMusic = ev[0];
    this.activetab = ev[1];
    this.musicId = ev[2];
    this.selectedAudioFile = ev[3]; // audio file 
    this.audioFilename = ev[4];// audio Name
    this.audioFileDuration = ev[5];// audio duration  
          
    this.prepareAudioFile();
  }

  musicVolume(){        
    var url = baseUrl +  "api/auth/videoPost";    
    var filename = this.selectedVideo.substr(this.selectedVideo.lastIndexOf('/') + 1);         
    var fileData = {
      furl : url,
      fname : filename,
      selectedVideo : this.selectedVideo,
      fTitle : this.videoForm.value.title,
      fDescription : this.videoForm.value.description,
      fSelectedMusicId : this.musicId,
      fSelectedGeneras : this.activetab,
      returnUrl : 'video-preview',      
      }
    this.commonService.presentModal(MusicVolumeModalComponent,'bottomModal',fileData);
  }

  musicList(ev: any) {
    this.musicTypes=ev.detail.value;   
  }
  
  prepareAudioFile() {    
    this.platform.ready().then(() => {
    this.musicChanged = 1; 
    this.audioFile = baseUrl+"public/storage/audio/"+this.selectedAudioFile;     
    });
  }
 
}
