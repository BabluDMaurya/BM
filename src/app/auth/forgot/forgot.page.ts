import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { PasswordValidator } from '../../validators/password.validator';
import {Storage} from '@ionic/storage';
// import { ToastController } from '@ionic/angular';
// import {LoadingController} from '@ionic/angular';

import { CommonService } from '../../services/common.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss','./../../app.component.scss'],
})
export class ForgotPage implements OnInit {
  registerForm2: FormGroup;
  submitted = false;
  isLoading = false;
  constructor(private router: Router,public formBuilder: FormBuilder, public storage:Storage,
    public commonService:CommonService,
    private authService:AuthService  ) { }

  ngOnInit() {    
    this.registerForm2 = this.formBuilder.group({     
      uemail: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9_.+-]+@(?:[a-zA-Z0-9-]+\.)\.[A-Za-z0-9._%+-]{2,}'),
        // Validators.pattern('[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(gmail|wdipl|yahoo|live|outlook|hotmail|yopmail)\.[A-Za-z0-9._%+-]{2,}')
      ])),
      });
  }

  validation_messages = {
    'uemail': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email Like: "example@domain.com" and allowed domains are  wdipl.com, gmail.com, yopmail.com, outlook.com, hotmail.com, live.com' }
    ],
    }
    get f() { return this.registerForm2.controls; }
    onSubmitted(){
    this.submitted = true;

    if (this.registerForm2.invalid) {
        return;
    }
    this.commonService.presentLoader();     
    this.authService.forgotPassword(this.registerForm2.value).subscribe((data:any)=>{
      console.log(data);
      if(data.status==true)
      {
        this.storage.set('forgotemail', this.registerForm2.value.uemail);
        this.commonService.dismissLoader();
        this.router.navigate(["reset-password",this.registerForm2.value.uemail]).then(nav => {
          console.log(nav); // true if navigation is successful
        }, err => {
          console.log(err) // when there's an error
        });
      this.registerForm2.reset();
      }else{
       
        this.commonService.dismissLoader();
        this.commonService.presentToast(data.status)
      }
    },
    err=>{ console.log(err)  }  );

  }

}
