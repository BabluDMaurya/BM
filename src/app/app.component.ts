import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Platform,AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {LoadingController} from '@ionic/angular';
import { AuthService } from './services/auth.service';
import { FCM } from '@ionic-native/fcm/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit
 {
  loaderToShow: any;
  currentScreenOrientation:string;  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    private screenOrientation: ScreenOrientation,
    public alertCtrl: AlertController,
    public loadingController: LoadingController,
    private authService: AuthService,
    private androidPermissions: AndroidPermissions,
     private fcm: FCM,
    
  ){
    this.initializeApp();
    this.backButtonEvent();



  }    
  backButtonEvent() {
    this.platform.backButton.subscribe(() => {
      
    });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault(); 
      this.splashScreen.hide();
            // if (this.platform.is('android')) {
            //     this.statusBar.overlaysWebView(false);
            //     this.statusBar.backgroundColorByHexString('#000000');
            //     this.splashScreen.hide();
            //   }
   



      //---------FCM----------//
      this.fcm.getToken().then(token => {           
        localStorage.setItem('deviceToken', token); 
    });
    this.fcm.onTokenRefresh().subscribe(token => {
          // this.settingService.updateUserToken({'token':token}).subscribe((data: any) => {              
          //   if (data.message === true) {
          //     console.log('updateUserToken:success');                
          //   } else {
          //     console.log('updateUserToken:error');
          //   }
          // }
        // );
        // console.log('Bomrah:'+token);
    });
    this.fcm.onNotification().subscribe(data => {
        console.log(data);
      if (data.wasTapped) {
        console.log('Received in background');
        this.router.navigate([data.landing_page, data.price]);
      } else {
        console.log('Received in foreground');
        this.router.navigate([data.landing_page, data.price]);
      }
    });

    this.fcm.subscribeToTopic('people');
    // FCM.unsubscribeFromTopic('marketing');
    
    //---------FCM END------//

      // this.splashScreen.hide();     
      // if (this.platform.is('android')) {        
      //     this.statusBar.overlaysWebView(false);
      //     this.statusBar.backgroundColorByHexString('#000000');           
      //     this.fcmNotification();
      // }else if(this.platform.is('ios')){
      //     this.fcmNotification();
      // }
      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_STORAGE, this.androidPermissions.PERMISSION.GET_ACCOUNTS]).then(
        result => {
            console.log('User allowed access to camera');
            // put your code here
        },
      );    

      this.statusBar.styleDefault();
      this.currentScreenOrientation = this.screenOrientation.type;
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    });
    
  } 
  ngOnInit(){
       this.authService.autoLogin();    
  } 
 
}
