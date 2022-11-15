import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { SearchService } from '.././services/search.service';
import { Observable } from 'rxjs';
import { Config } from "./../config/config";
import {CommonService } from './../services/common.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./../app.component.scss', './search.page.scss'],
})

export class SearchPage implements OnInit {
    data: any;
    logText = "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.";
  bookmark= true;
  users: any;
  results: Observable<any>;
  searchTerm: string = '';
  personList: any = null;
  selectedPersonList = [];
  newSearchPersonList: any = null;
  list_to_show = this.selectedPersonList;
  show_list = true;
  loginUserData: any;
  advertisment: any = [];
  people_new_list: any = [];
  sortedpeople_new_list: any;
  expanded = false;
  search: string = 'people';
  public items: any;
  searchPeople: any;
  sorted: any;
  sortedPersonList: any;
  searchPersonList: any[];
  topTenPeople: string;
  categories: string = 'yoga';
  result: any;
  url : any = Config.profilePic;
  i = 0;
  term = ''; 
  constructor(public alertCtrl: AlertController,
      public router: Router,
      public navCtrl: NavController,
      private searchservice: SearchService,
      private commonService:CommonService,
  ) { }

//   doRefresh(event) {    
//     this.ngOnInit();  
//     setTimeout(() => {
//       event.target.complete();
//     }, 2000);
//   }
  categoryChanged(ev: any) {
      this.categories = ev.detail.value;
  }
  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {};
    }, 1000);
  }
  ngOnInit() {      
      this.loginUserData = this.commonService.getUserData();
      this.searchData();
  }

  goBack() {
      this.navCtrl.back();
  }

  searchData() {
      this.commonService.presentLoader();
      
      if(this.loginUserData){
        this.searchservice.listCountry().subscribe(
            (data: any) => {
                console.log(data);
                this.selectedPersonList = (data.topTenUserList);

                this.searchPersonList = data.topTenUserList;
                this.searchservice.searchPeople({ userListedId: data.topTenID }).subscribe(
                    (peoples: any) => {
                      console.log(peoples);
                      this.commonService.dismissLoader();

                        this.sortedPersonList = peoples.userList.sort((a, b) => a.user_name > b.user_name ? 1 : -1);

                        this.sortedPersonList.sort((a, b) => a.user_name.localeCompare(b.user_name));
                        let i = 1;
                        let ad = { 'advertisment': 'Advertisamentgdkfgklfd' }
                        const grouped = this.sortedPersonList.reduce((groups, contact) => {

                            const letter = contact.user_name.charAt(0).toUpperCase();


                            groups[letter] = groups[letter] || [];

                            groups[letter].push(contact);
                          //   if ((i % 5 == 0) && (i !== 1)) {
                          //       groups[letter].push(ad);
                          //   }
                            i++;
                            return groups;
                        },err => {
                          this.commonService.dismissLoader();
                        });
                        this.result = Object.keys(grouped).map(key => ({ key, contacts: grouped[key] }));
                    });
            },
            err => {
              this.commonService.dismissLoader();
                console.log(err);
            });
        } else {
          this.searchservice.searchGuestPeople(null).subscribe(
            (peoples: any) => {
              console.log(peoples);
              this.commonService.dismissLoader();

                this.sortedPersonList = peoples.userList.sort((a, b) => a.user_name > b.user_name ? 1 : -1);

                this.sortedPersonList.sort((a, b) => a.user_name.localeCompare(b.user_name));
                let i = 1;
                let ad = { 'advertisment': 'Advertisamentgdkfgklfd' }
                const grouped = this.sortedPersonList.reduce((groups, contact) => {

                    const letter = contact.user_name.charAt(0).toUpperCase();


                    groups[letter] = groups[letter] || [];

                    groups[letter].push(contact);
                  //   if ((i % 5 == 0) && (i !== 1)) {
                  //       groups[letter].push(ad);
                  //   }
                    i++;
                    return groups;
                },err => {
                  this.commonService.dismissLoader();
                });
                this.result = Object.keys(grouped).map(key => ({ key, contacts: grouped[key] }));
            });
        }
  }
  tabChange(ev: any) {
      this.search = ev.detail.value;
  }
  searchChanged(peopleName) {
      const searchTerm = peopleName.srcElement.value;


      this.personList = [];

      if (!searchTerm) {
          this.searchPersonList = this.selectedPersonList;
          this.newSearchPersonList = false;
          this.searchData();
          return;
      }

      this.searchservice.searchQuery({ "searchQuery": searchTerm }).subscribe(
          (search: any) => {

              this.newSearchPersonList = (search.searchList);
          }
      )
  }

  public getUsers() {
      this.searchservice.listCountry().subscribe(
          (data: any) => {
              this.selectedPersonList = (data.topTenUserList);
              this.searchPersonList = (data.topTenUserList);

          },
          err => {
              console.log(err);
          });
  }
}