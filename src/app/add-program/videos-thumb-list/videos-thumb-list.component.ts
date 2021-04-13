import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Config } from './../../config/config';
import { NavParams } from '@ionic/angular'
import { ProgramService }from './../../services/program.service'
@Component({
  selector: 'app-videos-thumb-list',
  templateUrl: './videos-thumb-list.component.html',
  styleUrls: ['../../app.component.scss','./videos-thumb-list.component.scss'],
})
export class VideosThumbListComponent implements OnInit {

  videoList:any;
  url =Config.storagePath;
  programDetail :any;
  videosel:any;
  constructor(public commonService: CommonService,
    private navParams:NavParams,
    private programService:ProgramService) { }

  ngOnInit() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    this.programDetail = this.navParams.data.programDetail;
    this.commonService.presentLoader();
    this.commonService.loadVideoType({'userId':userData.id ,'postType':2, 'videoType':3}).subscribe(data=>{
      this.commonService.dismissLoader();
      this.videoList= data.posts.data;
      console.log(this.videoList);
    },err=>{
      
      this.commonService.dismissLoader(); 
      this.commonService.presentToast('something went wrong.');
    });
  }
  closeModal(data){
    this.commonService.dismissModal(data);
  }
  submit(){
  let  data = [];
    this.videoList.forEach((el ,i)=>{
     
      if(el.sele ==true)
      { 
          data.push(el.id );
      }
    });
    this.closeModal(data);
    // this.programService.updateVideo({'video':data , 'programId':this.programDetail.id}).subscribe((d)=>{
    //    this.commonService.dismissModal(this.videoList)
    //    this.commonService.dismissLoader();
    // });
  }
}
