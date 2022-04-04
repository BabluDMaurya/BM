import { Component, OnInit,ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import { Platform,AlertController,NavController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {LoadingController} from '@ionic/angular';
import { AuthService } from './services/auth.service';
import { FCM } from '@ionic-native/fcm/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { File } from '@ionic-native/file/ngx';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { SigninPage } from './auth/signin/signin.page';
import { Socket } from 'ngx-socket-io';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit

{
  @ViewChild(NavController,{static:false}) navChild:NavController;
  loaderToShow: any;
  currentScreenOrientation:string;  
  userData:any;
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
     private file: File,
     public deeplinks: Deeplinks,
     private socket: Socket,
    
  ){
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      
      //this is the code who responds to the app deeplinks
      //Deeplinks if from Ionic Native
      this.deeplinks.routeWithNavController(this.navChild, {
        '/signin': SigninPage,
      }).subscribe((match) => {
        console.log('Successfully routed', match);
      }, (nomatch) => {
        let url ="https://play.google.com/store";
        nomatch.url;
        // console.log('Unmatched Route', nomatch);
      });
    });
    this.initializeApp();
    this.backButtonEvent();

  }    
  backButtonEvent() {
    this.platform.backButton.subscribe(() => {
      
    });
  }
  initializeApp() {
    console.log(this.platform.is('ios'))
    this.platform.ready().then(() => {
      this.statusBar.styleDefault(); 
      this.splashScreen.hide();
            // if (this.platform.is('android')) {
            //     this.statusBar.overlaysWebView(false);
            //     this.statusBar.backgroundColorByHexString('#000000');
            //     this.splashScreen.hide();
            //   }
   

            // this.file.createFile(this.file.externalApplicationStorageDirectory, "permissions.dat", true)
            // .then(() => {
            //     this.file.removeFile(this.file.externalApplicationStorageDirectory, "permissions.dat")
            //         .then( () => console.log('success'), error => console.error(error) );
            // }, error => console.error(error))

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
        console.log("fcm.onNotification : " + data);
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
