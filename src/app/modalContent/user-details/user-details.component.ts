import { Component, OnInit } from '@angular/core';
import {CommonService} from './../../services/common.service';
import { SettingsService } from '../../services/settings.service';
import {NavParams, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {

 
profileData: any;
countryName: any;
stateName: any;
cityName: any;
specialities: any;
secondarySpecialities: any;
aboutMe: any;
moreAboutMe: any;
className: any;
language: any;
  constructor(
    public commonService: CommonService,
    private settingsService: SettingsService,
    public navParamas: NavParams
    ) { }

  ngOnInit() {
    this.profileData = this.navParamas.get('profileData');
    this.countryName =  this.profileData.countryName;
    this.stateName = this.profileData.stateName;
    this.cityName = this.profileData.cityName;
    this.specialities = this.profileData.specialities;
    this.secondarySpecialities = this.profileData.secondarySpecialities;
    this.language = this.profileData.languages;
    this.aboutMe = this.profileData.aboutMe;
    this.moreAboutMe = this.profileData.moreAboutMe;
    this.className = this.profileData.className;
  }
  dismiss()
  {
    this.commonService.dismissModal();
  }

}
