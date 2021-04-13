import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { MustMatch } from './../../helpers/formvalidator';
import { SettingsService } from './../../services/settings.service';
import { CommonService } from './../../services/common.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-change',
  templateUrl: './change.page.html',
  styleUrls: ['./../../app.component.scss','./change.page.scss'],
})
export class ChangePage implements OnInit {

  toast: any;
  cpwd: boolean = true;
  pwd: boolean = true; 
  npwd: boolean = true;
  changeForm: FormGroup;
  submitted = false;

  constructor(public router: Router,
              public commonService: CommonService,
              public formBuilder: FormBuilder,
              public settingService: SettingsService,
              public storage: Storage,
              public navCtrl: NavController) { }

  ngOnInit() {

    this.createForm();
  }



  createForm()
  {
    this.changeForm = this.formBuilder.group({
      
      cur_pass: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      new_pass: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
      ])),
      cnf_pass: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    }, {
      validator: MustMatch('new_pass', 'cnf_pass')
    });
  }

  validation_messages = {
    'cur_pass': [
      { type: 'required', message: 'This field is required ' },
    ],
    'new_pass': [
      { type: 'required', message: 'Please provide a new password' },

    ],
    'cnf_pass': [
      { type: 'required', message: 'Please confirm the password' },
      { type: 'mustMatch', message: 'Password do not match.'},
    ],
    
   };

 
  get f() { return this.changeForm.controls; }
  onSubmit(){
    this.submitted = true;    
    // stop here if form is invalid
    if (this.changeForm.invalid) {
        return;
    }

    this.settingService.resetPassword(this.changeForm.value).subscribe((data:any)=>{
      console.log(data);
      if(data.status == true)
      {
        this.storage.remove('userData');
        this.storage.remove('userToken');
        this.commonService.presentToast('Password updated.');
        this.router.navigateByUrl('signin');
      }else{
        this.commonService.presentToast(data.status)
      }
    },
    err=>{ console.log(err);  }  );

  }

  goBack(){
    this.navCtrl.back();
  }

}
