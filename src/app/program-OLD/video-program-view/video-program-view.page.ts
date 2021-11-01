import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute, ParamMap} from "@angular/router";
import { PostService } from '../../services/post.service'; 
import { Config } from "../../config/config";
import { CommonService } from 'src/app/services/common.service';


const baseUrl = Config.ApiUrl;

// We need to decalre our global RadiantMP constructor 
declare const RadiantMP: any;

@Component({
  selector: 'app-video-program-view',
  templateUrl: './video-program-view.page.html',
  styleUrls: ['./video-program-view.page.scss'],
})
export class VideoProgramViewPage implements OnInit {

  elementID: string = 'rmpPlayer';
  rmp: any = null;
  settings : any;
  src : any;
  videoId : any;
  pgId : any;
  storagePath : string;
  videoThumbPath : any;
  postData : any;
  addData : any;
  videoDataPath :any;
  ad_xml_path : any;

  constructor(
    private navCtrl: NavController,
    private actRoute: ActivatedRoute,
    private postService : PostService,
    public commonService: CommonService
    ) {
       this.storagePath = baseUrl+'storage/'; 
   }

  //------------------ -- GO BACK  ------------
  goBack() {
    this.navCtrl.back();
  }

  // When home page comes into view we play our player
  ionViewDidEnter() {
    if (this.rmp && this.rmp.getReady()) {
      this.rmp.play(); 
    }
  }


   // When we leave home page for another page we pause our player
   ionViewWillLeave() {
    if (this.rmp && this.rmp.getReady()) {
      this.rmp.pause();
    }
  }
  // When home page initially loads we configure and init our player 
  ionViewWillEnter() {
    this.commonService.presentLoader();
    this.postService.getVideoPostById({'videoId': this.videoId}).subscribe((data)=>{
      this.postData = data.postData;      
      
      this.videoDataPath =  this.storagePath + this.postData.video_path; 
      this.videoThumbPath =  this.storagePath + this.postData.thumb_path; 
      this.postService.getAddByPGId({'pgId': this.pgId}).subscribe((data)=>{
        this.addData = data.addData;   
       this.ad_xml_path = this.addData.ad_xml_path;
        this.readiantMediaPlayer();   
      });      
    },
	err=>{
		this.commonService.dismissLoader();		
		this.commonService.presentToast('Something went wrong.')
	});
    
  }
  ngOnInit() {
    this.actRoute.paramMap.subscribe((params: ParamMap) => {                 
      this.videoId = params.get('videoId');        
      this.pgId = params.get('pgId');              
    }); 
  }

  readiantMediaPlayer(){      
    this.src = {
      mp4: this.videoDataPath
    };
    // Define ad-schedule
  // var schedule = {
  //   // Preroll
  //   preroll: 'https://www.radiantmediaplayer.com/vast/tags/inline-linear.xml',
  //   // Midroll
  //   midroll: [
  //     [30, 'https://www.radiantmediaplayer.com/vast/tags/inline-linear-skippable.xml'],
  //     [60, 'https://www.radiantmediaplayer.com/vast/tags/inline-linear-skippable.xml']
  //   ],
  //   // Postroll
  //   postroll: 'https://www.radiantmediaplayer.com/vast/tags/inline-linear.xml'
  // };
    this.settings = { 
      licenseKey: 'c3BkbW9vanJ5YUAxNTk5MjA5',
      src: this.src,
      // width: 640,
      // height: 360,
      autoHeightMode: true,
      autoHeightModeRatio: 2.4,
      preload: 'auto',
      autoplay: true,
      pathToRmpFiles: 'assets/rmp/',
      automaticFullscreenOnLandscape: true,
      // hideControls: true,
      hideSeekBar: true,
      hideVolume: true,
      hideCentralPlayButton: true,
	  crossorigin:"",
      //logo
      // logo: "../../../assets/images/logo.png",
      // logoPosition: 'topright',
      // logoWatermark: true,
      // if we need ads
      ads: true,
      // rmp-vast is generally preferred in Cordova-based apps to display ads
      // but if you are using Google ads servers (DFP, AdSense, AdX), the IMA SDK is required
      // see https://www.radiantmediaplayer.com/docs/latest/mobile-applications.html#mobile-video-ads
      adParser: 'rmp-vast',
     adTagUrl: this.ad_xml_path,
      //adTagUrl: 'https://ionicinto.wdipl.com/intoactive1714.xml',
      //adTagUrl: 'https://www.radiantmediaplayer.com/vast/tags/inline-linear.xml',
      // adSchedule: schedule,
      contentMetadata: {
        poster: [
          this.videoThumbPath
        ]
      }
    };
    this.rmp = new RadiantMP(this.elementID);
    this.rmp.init(this.settings);
    this.commonService.dismissLoader();
    // handle "tabs" in fullscreen mode
    var rmpContainer = document.getElementById(this.elementID);
    var FW = this.rmp.getFramework();
    var bottomTabBar;
      rmpContainer.addEventListener('ended', function () {
        //this.navCtrl.back();
        console.log('player ended');
      });
    rmpContainer.addEventListener('enterfullscreen', function () {
      if (!bottomTabBar) {
        bottomTabBar = <HTMLElement>document.querySelector('.tabbar.show-tabbar');
      }
      FW.addClass(bottomTabBar, 'rmp-no-display');
    });
    rmpContainer.addEventListener('exitfullscreen', function () {
      if (!bottomTabBar) {
        bottomTabBar = <HTMLElement>document.querySelector('.tabbar.show-tabbar');
      }
      FW.removeClass(bottomTabBar, 'rmp-no-display');
    });
  }
}
