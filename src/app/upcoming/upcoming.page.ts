import { Component, OnInit } from '@angular/core';
import { NutritionModalComponent } from '../user-profile/nutrition-modal/nutrition-modal.component';
import { CommonService } from './../services/common.service';
import { ProgramService } from './../services/program.service';
import { Config } from './../config/config';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { NavController } from '@ionic/angular';

import { parse } from 'querystring';
@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.page.html',
  styleUrls: ['./upcoming.page.scss', './../app.component.scss', '../profile/my-profile/my-profile.page.scss'],
})
export class UpcomingPage implements OnInit {
  programFiltered: [];
  private _searchTerm: string;
  get programSearchTerm(): string  {
    return this._searchTerm;
  }
  set programSearchTerm(value: string) {
    this._searchTerm = value;
    this.programFiltered = this.programFilter(value);
  }
  consultID: any;
  upcomingList: any;
  profile_url = Config.profilePic;
  noData:any;
  userData:any;
  programimg_array : any;
  public navCtrl: NavController;
  url = Config.imgUrl;
  constructor(private commonService: CommonService,
    private actRoute: ActivatedRoute,
    private programService: ProgramService) {
      this.actRoute.paramMap.subscribe((params: ParamMap) => {
        if (params.get('userData')) {
          this.consultID = params.get('userData');
        }
        console.log("this.consultID" + this.consultID);
      });
      this.userData = JSON.parse(localStorage.getItem('userData'));
      console.log("this.userData :" + this.userData);
  }


  ngOnInit() {
  console.log(this.consultID);
    if (this.consultID) {      
      this.getConsultProg(this.consultID);
    } else {
      this.getMyprog();
    }

  }

  nutritionModal(data) {
    this.commonService.presentModal(NutritionModalComponent, 'fullModal', { 'data': data });
  }
  programFilter(searchString: string) {
    return this.upcomingList.filter(employee =>
      employee.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
  getMyprog() {
    this.programService.getUpcomingPrograms(null).subscribe(data => {
      if(data.programList.length<1)
      {
        this.noData=true;
      }
      
      this.upcomingList = this.getCounter(data.programList);
      this.upcomingList = data.programList.filter(el => {
        if (el.image_path) {
          el.img_arr = el.image_path.split(',');
        }
        el.converted = new Date(el.program_date + 'Z');
        el.expanded = false;
        return el;
      });
      this.programFiltered = this.upcomingList;
    });    
  }  
  getConsultProg(id) {
    this.programService.getConsultPrograms({'consultId':id}).subscribe(data => {
      console.log(data);
      if(data.data.length<1)
      {
        this.noData=true;
      }
      this.upcomingList = this.getCounter(data.data);
      this.upcomingList = data.data.filter(el => {
        if (el.image_path) {
          el.img_arr = el.image_path.split(',');
        }
        el.converted = new Date(el.program_date + 'Z');
        el.expanded = false;
        return el;
      });
    });
  }
  getCounter(elementArr) {
    elementArr.filter(el => {
      el.convertedTime = new Date(el.program_date + 'Z');
      let a: any = new Date(el.program_date + 'Z');
      let b: any = new Date();
      let c: any;

      if (a > b) {
        c = Math.abs(a - b) / 1000;

      } else {
        c = 0;
        el.live = true;
      }

      el.cd = c;

      setInterval(function () {
        if (parseInt(el.cd) > 0)
          el.cd = parseInt(el.cd) - 1;
        el.hh = ~~(el.cd / (60 * 60));
        el.mm = ~~(el.cd % 3600 / 60);
        el.ss = (el.cd % 3600 % 60);
      }, 1000)
      return el;
    });

    return elementArr;
  }
  goBack() {
    this.navCtrl.back();
  }

}
