import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../services/auth.service';
import { CommonService } from '../../services/common.service';
import { Platform, AlertController } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { TermsComponent } from './../../modalContent/terms/terms.component';
import { PrivacyComponent } from './../../modalContent/privacy/privacy.component';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss', './../../app.component.scss'],
})

export class SignupPage implements OnInit {
  ipAddress: any;

  email: string;
  npwd: boolean = true;
  password: string = '';
  emailAvail: string;
  unameAvail: string;
  emailAvaibilityErr: boolean = false;
  unameAvaibilityErr: boolean = false;
  registerForm: FormGroup;
  hide: any;
  usernames: [];
  captchaMatcherr: boolean = false;
  captchaErr: string;
  submitted: boolean = false;
  captchaDiv: string;
  capVal: string;
  locationCoords: any;
  constructor(
    public commonService: CommonService,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private storage: Storage,
    private androidPermissions: AndroidPermissions,
    private geolocation: Geolocation,
    private locationAccuracy: LocationAccuracy,
  ) {
    this.createForm();
    this.locationCoords = {
      latitude: "",
      longitude: "",
      accuracy: "",
      timestamp: ""
    }
  }

  ngOnInit() {
    //this.authService.autoLogin();
    //get the captch api
    this.authService.getCaptchaHtml().subscribe(
      (data: any) => {
        this.captchaDiv = data.value1;
        this.capVal = data.result;
      },
      err => {
        // console.log(err);
      });
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {

        if (result.hasPermission) {

          //If having permission show 'Turn On GPS' dialogue
          this.askToTurnOnGPS();
        } else {

          //If not having permission ask for permission
          this.requestGPSPermission();
        }
      },
      err => {
      }
    );
  }

  // Reactiveform create
  createForm() {
    this.registerForm = this.fb.group({
      username: new FormControl('', Validators.compose([
        //UsernameValidator.validUsername,
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[A-Za-z][A-Za-z0-9_./&+-]{4,25}$'),
        Validators.maxLength(25),
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9_.+-]+@(?:[a-zA-Z0-9-]+\.)\.[A-Za-z0-9._%+-]{2,}'),
        //  Validators.pattern('[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(gmail|wdipl|yahoo|live|outlook|hotmail|yopmail|gmx)\.[A-Za-z0-9._%+-]{2,}')
      ])),
      sex: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      captcha: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      age: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      policy: new FormControl('', Validators.compose([
        Validators.required,
        Validators.requiredTrue
      ])),
      password: new FormControl('', Validators.compose([
        // PasswordValidator.areEqual,
        Validators.required,
        Validators.maxLength(25),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
      ])),
      lat: [''],
      lon: [''],

    });

  }

  'validation_messages' = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email Like: "example@domain.com" and allowed domains are  wdipl.com, gmail.com, yopmail.com, hotmail.com, outlook.com, live.com' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 8 characters long.' },
      { type: 'pattern', message: 'Length should be 8(least one uppercase, one lowercase, one special charector and one number)' }

    ],
    username: [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Please enter atleast 5 characters and first letter should be alphabet. You can use number and _ . / & + - ' },
      { type: 'validUsername', message: 'Your username has already been taken' }
    ],
    age: [
      { type: 'required', message: 'Select age.' },
    ],
    sex: [
      { type: 'required', message: 'Gender required.' },
    ],
    captcha: [
      { type: 'required', message: 'This field is required.' },
    ],
    policy: [{ type: 'required', message: 'This field is required.' },
    { type: 'requiredTrue', message: 'This field needs to be checked.' }]
  };


  myFunction() {
    this.hide = !this.hide;
  }

  // Form submit event listner
  get f() { return this.registerForm.controls; }

  checkCaptcha(captchaval) {
    // && this.registerForm.value.captcha !== ''
    if (captchaval.target.value != this.capVal && captchaval.target.value !== '') {
      this.captchaMatcherr = true;
      this.captchaErr = 'Invalid Captcha.';
    } else {
      this.captchaMatcherr = false;
      this.captchaErr = '';

    }

  }
  onClickSubmit() {
    this.submitted = true;
    this.registerForm.get('lat').setValue(this.locationCoords.latitude);
    this.registerForm.get('lon').setValue(this.locationCoords.longitude);


    if (this.registerForm.invalid || this.registerForm.value.captcha != this.capVal || this.emailAvaibilityErr || this.unameAvaibilityErr) {
      return;
    }
    this.commonService.presentLoader();
    this.authService.addUser(this.registerForm.value).subscribe((data: any) => {

      if (data.message == true) {
        this.storage.set('userData', this.registerForm.value.email);
        this.storage.set('userToken', data.userToken);
        this.commonService.dismissLoader();
        this.router.navigate(["verify", this.registerForm.value.email]).then(nav => {
          // console.log(nav); 

        }, err => {
          // console.log(err)
        });
        this.registerForm.reset();

      } else {

        this.commonService.dismissLoader();
        this.commonService.presentToast(JSON.stringify(data));
      }

    }, err => {
      this.commonService.dismissLoader();
    });
  }

  // change event listener
  checkMail(emailval) {
    if (this.registerForm.value.email !== '') {
      this.authService.checkMailAvailability(emailval.target.value).subscribe(
        (data: any) => {
          if (data.status == false) {
            this.emailAvaibilityErr = true;
            this.emailAvail = 'Email id already exist!!';
          } else if (data.status == true) {
            this.emailAvaibilityErr = false;
            this.emailAvail = '';
          }
        },
        err => {
          // console.log(err);
        });
    } else {
      this.emailAvail = '';
      // console.log('hhhgfgf');
    }
  }

  // change event listener
  checkUserName(unameval) {
    if (this.registerForm.value.username !== '') {
      this.authService.checkUnameAvailability(unameval).subscribe(
        (data: any) => {
          if (data.status == false) {
            this.unameAvaibilityErr = true;
            this.unameAvail = 'Username already exist';
            this.usernames = data.usernameSuggetions;

          } else if (data.status == true) {
            this.unameAvaibilityErr = false;
            this.unameAvail = '';
            this.usernames = null;
          }
        },
        err => {
          // console.log(err);
        });
    } else {
      this.unameAvail = '';
    }
  }

  setUsername(username) {
    // console.log(username);
    this.registerForm.get('username').setValue(username);
  }

  // -----------------------  G P S   P E R M I S S I O N  ----------------------
  checkGPSPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        if (result.hasPermission) {

          //If having permission show 'Turn On GPS' dialogue
          this.askToTurnOnGPS();
        } else {

          //If not having permission ask for permission
          this.requestGPSPermission();
        }
      },
      err => {
        alert(err);
      }
    );
  }

  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        //console.log("4");
      } else {
        //Show 'GPS Permission Request' dialogue
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(
            () => {
              // call method to turn on GPS
              this.askToTurnOnGPS();
            },
            error => {
              //Show alert if user click on 'No Thanks'
              // alert('requestPermission Error requesting location permissions ' + error)
            }
          );
      }
    });
  }

  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        // When GPS Turned ON call method to get Accurate location coordinates
        this.getLocationCoordinates()
      },
      // error => alert('Error requesting location permissions ' + JSON.stringify(error))
    );
  }

  // Methos to get device accurate coordinates using device GPS
  getLocationCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.locationCoords.latitude = resp.coords.latitude;
      this.locationCoords.longitude = resp.coords.longitude;
      this.locationCoords.accuracy = resp.coords.accuracy;
      this.locationCoords.timestamp = resp.timestamp;
    }).catch((error) => {
      // alert('Error getting location' + error);
    });
  }

  // Refresh Captcha 
  refreshCaptcha() {
    //get the captch api
    this.authService.getCaptchaHtml().subscribe(
      (data: any) => {
        this.registerForm.controls['captcha'].setValue('');
        this.captchaDiv = data.value1;
        this.capVal = data.result;

      },
      err => {
        // console.log(err);
      });
  }

  termsModal() {
    this.commonService.presentModal(TermsComponent, 'fullModal', '');
  }
  privacyModal() {
    this.commonService.presentModal(PrivacyComponent, 'fullModal', '');
  }
}
