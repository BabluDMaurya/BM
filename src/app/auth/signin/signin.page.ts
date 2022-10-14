import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '../../validators/password.validator';
import { AuthService } from '../../services/auth.service';
import { CommonService } from '../../services/common.service';
import { SettingsService } from '../../services/settings.service';
import { Storage } from '@ionic/storage';
import { Platform, AlertController } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Subscription } from 'rxjs';
import { Socket } from 'ngx-socket-io';
//import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss', './../../app.component.scss'],
})
export class SigninPage implements OnInit, OnDestroy {
  hide: boolean = true;
  isLoading = false;
  email: string = '';
  npwd: boolean = true;
  cpwd: boolean = true;
  password: string = '';
  error: string = '';
  username: string = '';
  image: number;
  val: number;
  randomNumber;
  diviceToken: string;
  locationCoords: any;
  public alertShown: boolean = false;

  backButtonSubscription;

  validations_form: FormGroup;
  matching_passwords_group: FormGroup;
  registerForm: FormGroup;
  submitted = false;
  errorMessage: string = '';
  successMessage: string = '';
  subscribe: Subscription;
  constructor(public router: Router,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    private authService: AuthService,
    public storage: Storage,
    public commonService: CommonService,
    private androidPermissions: AndroidPermissions,
    private geolocation: Geolocation,
    private locationAccuracy: LocationAccuracy,
    private settingsService: SettingsService,
    private socket: Socket, 
    private platform: Platform) {
    this.createForm();
  }

  ngOnInit() {
    console.log("ngOnInit signin");
    //  this.authService.autoLogin();
    this.diviceToken = localStorage.getItem('deviceToken');
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      password: new FormControl('', Validators.compose([
        PasswordValidator.areEqual,
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
        Validators.required
      ])),
    });
  }

  validation_messages = {
    'username': [
      { type: 'required', message: 'Email or Username is required' },
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'pattern', message: 'Enter a valid password ' },
    ],

  };
  myFunction() {
    this.hide = !this.hide;
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log(this.registerForm);
      return;
    }
    this.commonService.presentLoader();

    this.authService.userLogin(this.registerForm.value).subscribe((data: any) => {
      // console.log(data);
      if (data.userToken) {
        this.storage.set('userData', JSON.stringify(data.userData));
        this.storage.set('userToken', data.userToken);
        localStorage.setItem('userData', JSON.stringify(data.userData));
        localStorage.setItem('userToken', data.userToken);
        localStorage.removeItem('guestUser');
        this.commonService.setUserData(data.userToken, data.userToken);
        

        this.commonService.dismissLoader();
        // send device token to server
        if (this.platform.is('android')) {
          this.settingsService.addDeviceToken({ 'token': this.diviceToken }).subscribe((data: any) => {

          }, (err) => {

          });
        } else if (this.platform.is('ios')) {
          this.settingsService.addDeviceToken({ 'token': this.diviceToken, 'divice_type': 'ios' }).subscribe((data: any) => {

          }, (err) => {

          });
        }
        this.socket.connect();
        this.socket.emit('set-name', data.userData.id,'chatList');
        if (data.userData.user_type == "1") {
          this.router.navigateByUrl('tabs/consultant-profile');
        } else if (data.userData.user_type == "0") {
          this.router.navigateByUrl('/tabs/user-profile');
        }


        //  this.registerForm.reset();
      } else if (data.message == '2') {

        let btns = [{
          text: 'Cancel',
          handler: (blah) => { }
        }, {
          text: 'Okay',
          handler: () => {
            this.commonService.presentLoader();
            this.authService.resendOtp({ 'uemail': data.uemail }).subscribe((value: any) => {

              this.commonService.dismissLoader();
              this.router.navigate(["verify", data.uemail]).then(nav => {
              }, err => {
              });
            }, (otperr) => {
              this.commonService.dismissLoader();
              this.router.navigateByUrl('verify');
            });
          }
        }];
        let msg = 'Email is not verified please verify email first';
        let title = 'Login Failed'
        this.commonService.presentAlert(title, msg, btns,'');
        this.commonService.dismissLoader();
      } else {
        this.commonService.dismissLoader();
        this.commonService.presentToast(data.message);
      }
      this.registerForm.reset();
    },
      err => {
        this.commonService.dismissLoader();
      });
  }

  // guestLogin(){
  //   console.log('test');
  //   localStorage.setItem('guestUser', '1');
  //   this.router.navigateByUrl('tabs/guest-home');
  // }

  onBack() {
    this.router.navigate(["/signup"]);
  }
  ionViewWillEnter() {
    console.log("ionViewWillEnter signin");
    this.subscribe = this.platform.backButton.subscribeWithPriority(10, async () => {
      if (this.router.isActive('/signin', true) && this.router.url === '/signin') { 
          let header: 'Are you sure you want Exit the  App?' ;
          let buttons= [
            {
              text: 'Cancel',
              role: 'cancel'
            }, {
              text: 'Exit',
              handler: () => {
                navigator['app'].exitApp();
              }
            }
          ] 
        this.commonService.presentAlert(header,'',buttons,'');
      }
    });
  }

  ionViewWillLeave() {
    //console.log("ionViewWillLeave signin");
    this.subscribe.unsubscribe();
  }
  // ngAfterContentInit() {
  //   let token = localStorage.getItem("userToken");

  //   if (token) {
  //     this.router.navigateByUrl('tabs/consultant-profile');
  //   }
  // }
  ngOnDestroy() {
    //console.log("ngOnDestroy signin");
    // this.backButtonSubscription.unsubscribe();  
  }
  ionNavDidChange() {
    //console.log("ionNavDidChange signin");
  }
}
