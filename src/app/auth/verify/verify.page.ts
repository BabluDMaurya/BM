import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,ParamMap} from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import { AuthService } from '../../services/auth.service';
//import { ToastController } from '@ionic/angular';
import  {CommonService} from './../../services/common.service'



@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss','./../../app.component.scss'],
})
export class VerifyPage implements OnInit {
  otpForm: FormGroup;
  uemail:string;
  submitted = false;
 // userData:Array;
  constructor(private fb: FormBuilder,
              private http: HttpClient, 
              private authService:AuthService, 
              private storage:Storage,
              private router:Router,
              public commonService:CommonService,
              public activatedRoute: ActivatedRoute
              ) {
   }

  ngOnInit() {
    
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {                 
      this.uemail = params.get('userData');
    });

   this.otpForm = this.fb.group({     
    otp: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    uemail: [''],
    });
  }


  validation_messages = {
    'otp': [
      { type: 'required', message: 'OTP required'},      
    ]
   };

   resend()
   {
     this.commonService.presentLoader();
     this.authService.resendOtp({'uemail':this.uemail}).subscribe(
      (data:any)=>{
        console.log(data);
          if(data.status == true)
          {
            this.commonService.dismissLoader();
            this.commonService.presentToast("Check email for new Otp. ");
            
          }else {
            this.commonService.dismissLoader();
            
            this.commonService.presentToast(data.status);
          }
        },
        err => {
          this.commonService.dismissLoader();
          console.log(err);
      });

   }

   get f() { return this.otpForm.controls; }
  
   onSubmit() {
      this.submitted = true;
      this.otpForm.get('uemail').setValue(this.uemail );
      if(this.otpForm.invalid)
      {
        return;
      }
      this.commonService.presentLoader();
      this.authService.checkOtp(this.otpForm.value).subscribe(
        (data:any)=>{
          console.log(data);
        if(data.status == false)
        {
          console.log('otp doesnt match');
          
        }else if(data.status == true){
          this.commonService.dismissLoader();
          this.storage.set('userDetails', data.status);
          this.router.navigateByUrl('signin');
        }else{
          this.commonService.dismissLoader();
          this.commonService.presentToast(data.message);
          console.log(data.message);
      
        }
      },
      err => {
        console.log(err);
    });    
  }
}
