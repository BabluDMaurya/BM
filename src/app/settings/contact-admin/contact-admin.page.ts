import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { SettingsService } from './../../services/settings.service';
import { CommonService } from './../../services/common.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contact-admin',
  templateUrl: './contact-admin.page.html',
  styleUrls: ['./../../app.component.scss','./contact-admin.page.scss'],
})
export class ContactAdminPage implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  isLoading = false;
  constructor(public formBuilder: FormBuilder,
              public settingService: SettingsService,
              public storage: Storage,
              public router: Router,
              public commonService:CommonService,
              public navCtrl: NavController) { }

ngOnInit() {
  this.createForm();
}

createForm(){
  this.contactForm = this.formBuilder.group({
    
    query: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    subject: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    message: new FormControl('', Validators.compose([
      Validators.required,
    ])),
  });
}

validation_messages = {
  'query': [
    { type: 'required', message: 'Please  Select Query ' },
  ],
  'subject': [
    { type: 'required', message: 'Please enter Subject' },

  ],
  'message': [
    { type: 'required', message: 'Please enter Message' },

  ],
  
  };

   get f() { return this.contactForm.controls; }
   
   onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
        return;
    }
    this.commonService.presentLoader();
    this.settingService.contactAdmin(this.contactForm.value).subscribe((data:any)=>{
      console.log(data);
      if(data.status == true)
      {
        this.commonService.dismissLoader();
        this.commonService.presentAlert('Success','Message delivered successfully.',null, 'custom-alert no-alert-button');
      }else{
        this.commonService.dismissLoader();
        this.commonService.presentAlert('Failed',data.status,null,'');
      }
    },
    err=>{ console.log(err);
      this.commonService.dismissLoader();
      this.commonService.presentAlert('Failed',err.message,null,'');  
    }  );

  }
  goBack(){
    this.navCtrl.back();
  }
}
