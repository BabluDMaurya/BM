import { Component, OnInit } from '@angular/core';
import { NutritionModalComponent } from '../../../user-profile/nutrition-modal/nutrition-modal.component';
import { CommonService } from './../../../services/common.service';
import { ProgramService } from './../../../services/program.service';
import { Config } from './../../../config/config';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { parse } from 'querystring';

@Component({
  selector: 'app-upcoming-tab',
  templateUrl: './upcoming-tab.component.html',
  styleUrls: ['./upcoming-tab.component.scss', './../../../app.component.scss', './../my-profile.page.scss'],
})

export class UpcomingTabComponent implements OnInit {
  consultID: any;
  upcomingList: any;
  profile_url = Config.profilePic;
  noData:any;
  userData:any;
  programimg_array : any;
  url = Config.imgUrl;
  constructor(private commonService: CommonService,
    private actRoute: ActivatedRoute,
    private programService: ProgramService) {
      this.actRoute.paramMap.subscribe((params: ParamMap) => {
        if (params.get('userData')) {
          this.consultID = params.get('userData');
        }
        // console.log(this.consultID);
      });

      this.userData = JSON.parse(localStorage.getItem('userData'));
      // console.log(this.userData);
  }


  ngOnInit() {
  // console.log('ngonit');
    if (this.consultID) {
      
      this.getConsultProg(this.consultID);
    } else {
      this.getMyprog();
    }

  }

  nutritionModal(data) {
    this.commonService.presentModal(NutritionModalComponent, 'fullModal', { 'data': data });
  }

  getMyprog() {
    this.programService.getUpcomingPrograms(null).subscribe(data => {
      if(data.programList.length<1)
      {
        this.noData=true;
      }
      this.upcomingList = this.getCounter(data.programList);
      this.programimg_array =this.upcomingList[0].image_path.split(',');
      
    });
    
  }
  
  getConsultProg(id) {
    this.programService.getConsultPrograms({'consultId':id}).subscribe(data => {
      if(data.data.length<1)
      {
        this.noData=true;
      }
      this.upcomingList = this.getCounter(data.data);

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

}
