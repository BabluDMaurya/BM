import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { PasswordValidator } from '../../validators/password.validator';
import {AuthService} from '../../services/auth.service';
import { Router, RouterModule, ActivatedRoute,ParamMap } from '@angular/router';
import {Storage} from '@ionic/storage';
import { MustMatch } from '../../helpers/formvalidator'
import { CommonService } from './../../services/common.service'
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss','./../../app.component.scss'],
})
export class ResetPasswordPage implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  email: string;
  constructor(public formBuilder: FormBuilder,
              public router: Router,
              public storage: Storage,
              private authService:AuthService,
              private commonService: CommonService,
              private activatedRoute: ActivatedRoute) { 

                this.activatedRoute.paramMap.subscribe((params: ParamMap) => {                 
                  this.email = params.get('emailid');
                });
              }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      ucode: ['', Validators.required],
      newPassword: new FormControl('', Validators.compose([
        PasswordValidator.areEqual,
          Validators.maxLength(25),
          Validators.minLength(5),
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
          Validators.required
        ])), 
       cPassword: ['', Validators.required],
       uemail: ['']
  }, {
      validator: MustMatch('newPassword', 'cPassword')
    });
  }

  validation_messages = {
    'ucode': [
      { type: 'required', message: 'Code is required.' },
    ],
    'newPassword': [
      { type: 'required', message: 'Password is required.' },
      { type: 'pattern', message: 'Password must be at least 8 characters,  1Uppercase , 1number , 1Special char' },
      { type: 'mustMatch', message: 'Password do not match.'},
    ],
    'cPassword': [
      { type: 'required', message: 'Password is required.'},
      { type: 'mustMatch', message: 'Password do not match.'},
    
    ],
   };
   
   get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.commonService.presentLoader();
    this.loginForm.get('uemail').setValue(this.email);
    this.authService.updatePassword(this.loginForm.value).subscribe((data:any)=>{
      console.log(data);
      if(data.status==true)
      {
        this.commonService.dismissLoader();
        this.router.navigateByUrl('signin');
      }else if(data.message){
        this.commonService.dismissLoader();
        this.commonService.presentToast(data.message);
      }else{
        this.commonService.dismissLoader();
        this.commonService.presentToast(data.status);
      }
    },
    err=>{ console.log(err)  }  );
  }
}
