import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { NavParams } from '@ionic/angular';
import { PeopleViewService } from './../../services/people-view.service';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Config } from './../../config/config';
import { SearchService } from './../../services/search.service';
@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['../../app.component.scss', './user-modal.component.scss'],
})
export class UserModalComponent implements OnInit {
  formData: any;
  source: any;
  peopleSelect: any;
  peopleList: any;
  peopleForm: any;
  userData: any;
  profileUrl: any = Config.profilePic;
  constructor(public commonService: CommonService,
    private navParams: NavParams,
    private peopleService: PeopleViewService,
    private fb: FormBuilder,
    private searchService: SearchService
  ) {

    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.formData = this.navParams.data.formData;
    this.source = this.navParams.data.source;
    console.log(this.formData);
    this.peopleService.getFollowers('').subscribe((peoples: any) => {
      console.log(peoples);
      let data;
      data = peoples.result.sort((a, b) => a.following_user.user_name > b.following_user.user_name ? 1 : -1);
      data.sort((a, b) => a.following_user.user_name.localeCompare(b.following_user.user_name));
      let i = 1;
      let ad = { 'advertisment': 'Advertisamentgdkfgklfd' }
      const grouped = data.reduce((groups, contact) => {

        const letter = contact.following_user.user_name.charAt(0).toUpperCase();
        groups[letter] = groups[letter] || [];

        groups[letter].push(contact);
        if ((i % 5 == 0) && (i !== 1)) {
          // groups[letter].push(ad);
        }
        i++;
        return groups;
      }, {});
      this.peopleList = Object.keys(grouped).map(key => ({ key, contacts: grouped[key] }));
      console.log(this.peopleList);
    });
    this.createForm();
  }

  createForm() {
    this.peopleForm = new FormGroup({
      peopleSelect: this.fb.array([])
    });
  }
 
  onCheckboxChange(e) {

    const checkArray = this.peopleForm.get('peopleSelect');
    let pt = this.formData.programType;
    console.log(pt);
    let msg;
    if (!e.target.checked) {
      if(pt == 1 || pt == 3)
      {
        if( checkArray.length<1)
        {
           checkArray.push(new FormControl(e.target.value));
        }else{
          msg = 'In private program only 1 user can select.Other will  not consider';
          this.commonService.presentAlert('Alert',msg,['Ok']);
        }

      }else if(pt==4)
      {
        if( checkArray.length<4)
        {
         
          checkArray.push(new FormControl(e.target.value));
        }else{
          msg = 'In group program 2 way only 4 users can select. Other will  not consider';
          this.commonService.presentAlert('Alert',msg,['Ok']);
        }

      }else{
        checkArray.push(new FormControl(e.target.value));
      }
     
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    console.log(checkArray);
  }
  ngOnInit() {

  }

  removeChip(index) {
    console.log(index)
    this.peopleForm.value.peopleSelect.removeAt(0);
  }
  closeModal() {
    let abc = this.commonService.dismissModal(this.peopleForm.value.peopleSelect);

  }

  searchPersonList: any;
  newSearchPersonList: any;

  searchChanged(peopleName) {
    const searchTerm = peopleName.srcElement.value;

    if (!searchTerm) {
      setTimeout(function () {
        this.newSearchPersonList = false;
      }, 2000);
      this.newSearchPersonList = false;
      console.log('ddddd');
      return false;

    }
    this.searchService.searchQuery({ "searchQuery": searchTerm }).subscribe(
      (search: any) => {
        this.newSearchPersonList = (search.searchList);
        console.log(this.newSearchPersonList)
      }
    )
  }
}
