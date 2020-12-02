import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { NavParams,NavController } from '@ionic/angular';
import { PeopleViewService } from './../../services/people-view.service';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Config } from './../../config/config';
import { SearchService } from './../../services/search.service';
import { ChatRoomPage } from '../chat-room/chat-room.page';

@Component({
  selector: 'app-add-private',
  templateUrl: './add-private.page.html',
  styleUrls: ['../../app.component.scss','./add-private.page.scss'],
})
export class AddPrivatePage implements OnInit {
  formData: any;
  source: any;
  peopleSelect: any;
  peopleList: any;
  peopleForm: any;
  userData:any;
  profileUrl: any = Config.profilePic;
  constructor(public commonService: CommonService,
    // private navParams: NavParams,
    public navCtrl: NavController,
    private peopleService: PeopleViewService,
    private fb: FormBuilder,
    private searchService: SearchService
  ) {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    // this.formData = this.navParams.data.formData;
    // this.source = this.navParams.data.source;
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
        // if ((i % 5 == 0) && (i !== 1)) {
        //   groups[letter].push(ad);
        // }
        // i++;
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
  ionViewWillEnter() {

  }
  onCheckboxChange(e) {

    const checkArray = this.peopleForm.get('peopleSelect')
    if (!e.target.checked) {
      // console.log('sss');
      checkArray.push(new FormControl(e.target.value));
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
    // console.log("this.peopleForm:"+JSON.stringify(this.peopleForm));
  }
  ngOnInit() {

  }

  removeChip(index) {
    console.log(this.peopleForm.value.peopleSelect)
    this.peopleForm.value.peopleSelect.removeAt(0);
  }
  chatRequest() {
    this.formData = this.peopleForm.value;
    // this.router.navigate(ChatRoomPage,{
    //   item:this.formData
    //   });
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
      // console.log('ddddd');   
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
