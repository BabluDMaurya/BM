import { Component, OnInit, } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SearchService } from '../services/search.service';
import { Config } from "./../config/config"; 

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.page.html',
  styleUrls: ['./category-page.page.scss', './../app.component.scss'],
})
export class CategoryPagePage implements OnInit {
  specialityId: string;
  specialityName: string;
  sortedPersonList: any;
  url=Config.profilePic;
  result: { key: string; contacts: any; }[];
  segment=0;   
  videoList:any;
  storagePath = Config.storagePath;
  loginUserData: any;
  constructor(
    public router: Router,
    public commonService: CommonService,
    private navCtrl: NavController,
    private actRoute: ActivatedRoute,
    private searchService: SearchService) { 
      
    }
    async segmentChanged(ev: any) {  
      console.log(ev);  
      this.segment =ev.detail.value
    }  
      
  ngOnInit() { 
    this.loginUserData=this.commonService.getUserData(); 
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      this.specialityId = params.get('id');
      this.specialityName = params.get('name'); 
    });
    this.commonService.presentLoader();

    this.searchService.getUserByCategoryId({'specialityId':this.specialityId}).subscribe(peoples=>{
      
      this.sortedPersonList = peoples.userList.sort((a, b) => a.user_name > b.user_name ? 1 : -1);

      this.sortedPersonList.sort((a, b) => a.user_name.localeCompare(b.user_name));
      let i = 1;
      let ad = { 'advertisment': 'Advertisamentgdkfgklfd' }
      const grouped = this.sortedPersonList.reduce((groups, contact) => {

          const letter = contact.user_name.charAt(0).toUpperCase();


          groups[letter] = groups[letter] || [];

          groups[letter].push(contact);
          if ((i % 5 == 0) && (i !== 1)) {
              groups[letter].push(ad);
          }
          i++;
          return groups;
      }, {});
      this.result = Object.keys(grouped).map(key => ({ key, contacts: grouped[key] }));
      console.log(this.result);
    });


    this.searchService.getCBC({"catId": this.specialityId}).subscribe(data=>{
      this.commonService.dismissLoader();
      this.videoList = data.data;
    },err=>{
      this.commonService.dismissLoader();
    });
  }

  goBack(){
    this.navCtrl.back();
  }
}
