import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import {CommonService} from '../../services/common.service';
import {ProgramService } from '../../services/program.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-music-vol',
  templateUrl: './music-vol.component.html',
  styleUrls: ['./../../app.component.scss','./music-vol.component.scss'],
})
export class MusicVolComponent implements OnInit {
  mVol=50;
  musicId:any;
  progId:any;
  isUploading : boolean = false;
  constructor(private navParams:NavParams,
    private commonService:CommonService,
    private programService:ProgramService,
    private router: Router,private navCtrl:NavController) {
      
     }

  ngOnInit() {
    this.musicId = this.navParams.data.musicId;
    this.progId = this.navParams.data.programId
  }

  goBack() {
    this.navCtrl.back();
  }

  volumeSelected(ev)
  {
    this.mVol =ev;
  }

 fSubmit() {
  
  if(!this.mVol)
  {
    this.commonService.presentToast('select volume');
    return false;
  }else{
    this.isUploading = true;
  }
    this.commonService.presentLoader();
    this.programService.updateProgramMusic({ "musicId": this.musicId, "programId": this.progId, 'musicVol': this.mVol}).subscribe(
      (data) => {
        this.isUploading = false;
     this.commonService.dismissModal();
        this.commonService.dismissLoader();
        //  this.navCtrl.navigateForward('/add-program/program-details/' ,this.programDetail.id)
        this.router.navigate(["tabs/program"])
      },
      err=>{
        this.isUploading = false;
     this.commonService.dismissModal();
     this.commonService.dismissLoader();
      });
  }
}
