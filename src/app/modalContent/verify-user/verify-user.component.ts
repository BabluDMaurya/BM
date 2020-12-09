import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {CommonService} from './../../services/common.service';
import { SettingsService } from '../../services/settings.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['../../app.component.scss','./verify-user.component.scss'],
})
export class VerifyUserComponent implements OnInit {
  userIdentityVerifyForm: FormGroup;
  submitted = false;
  showSubOptionOfAU:boolean = false; //default
  showSubOptionOfUS:boolean = false; //default
  @Output() itemFromComponent = new EventEmitter();
  constructor(
     public commonService: CommonService,
     public formBuilder: FormBuilder,
     private settingsService: SettingsService
     ) { this.createForm();}

  ngOnInit() {
    //     this.settingsService.getCountryCodeApi().subscribe((data: any) => {
    // console.log(data);
    //     });    
  }
  onSelectChangeOption(){
    //grab form value
    let optionValue = this.userIdentityVerifyForm.get('countrycode').value;
    //show subOptions
    if(optionValue == "AU"){
        this.showSubOptionOfAU = true;
    }
    else{
        this.showSubOptionOfAU = false;
    }
    if(optionValue == "US"){
      this.showSubOptionOfUS = true;
    }
    else{
        this.showSubOptionOfUS = false;
    }
  }
  createForm() {
    this.userIdentityVerifyForm = this.formBuilder.group({
      countrycode:new FormControl('', Validators.compose([
        Validators.required,
      ])),
      passportnumber: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      firstname: new FormControl('', Validators.compose([
        // PasswordValidator.areEqual,
        // Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
        Validators.required
      ])),
      middelname: new FormControl('', Validators.compose([
        // Validators.required
      ])),
      lastname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      dateofbirth: new FormControl('', Validators.compose([
        // Validators.required
      ])),
      buildingnumber: new FormControl('', Validators.compose([
        // Validators.required
      ])),
      Postalcode: new FormControl('', Validators.compose([
        Validators.required
      ])),
      stateprovincecode: new FormControl('', Validators.compose([
        // Validators.required
      ])),
      streetname: new FormControl('', Validators.compose([
        // Validators.required
      ])),
      streettype: new FormControl('', Validators.compose([
        // Validators.required
      ])),
      suburb: new FormControl('', Validators.compose([
        // Validators.required
      ])),
      unitnumber: new FormControl('', Validators.compose([
        // Validators.required
      ])),      
    });
  }
  validation_messages = {
    'passportnumber': [
      { type: 'required', message: 'Passport Number is required' },
    ],
    'firstname': [
      { type: 'required', message: 'First Name is required.' },
    ],
    'lastname': [
      { type: 'required', message: 'Last Name is required.' },
    ],
    'Postalcode': [
      { type: 'required', message: 'Postal Code is required.' },
    ],
    'countrycode': [
      { type: 'required', message: 'Country Code is required.' },
    ],
  };

  onSubmit() {
    // this.submitted = true;
    if (this.userIdentityVerifyForm.invalid) {
      console.log(this.userIdentityVerifyForm);
      return;
    }
    this.commonService.presentLoader();
    this.settingsService.userIndentityVerify(this.userIdentityVerifyForm.value).subscribe((data: any) => {
      this.commonService.dismissLoader();
      if(data.Record.RecordStatus ==='match'){
        this.settingsService.trilloRecordUpdate().subscribe((data:any)=>{
          let loginUserData = JSON.parse(localStorage.getItem('userData'));
          loginUserData.trilloMach = 1;
          localStorage.setItem('userData',JSON.stringify(loginUserData));
        });
        this.commonService.dismissModal();
        this.commonService.presentToast('Record Match');
      }else if(data.Record.RecordStatus ==='undefined'){ 
        
        this.commonService.presentToast(data);
      }else{        
        this.commonService.presentToast('Record Not Match');        
      }       
    }, (err) => {
      this.commonService.dismissLoader();
    });    
  }

  dismiss()
  {
    this.commonService.dismissModal();
  }
}
