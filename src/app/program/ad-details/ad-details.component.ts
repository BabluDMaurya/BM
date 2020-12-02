import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { CommonService } from '../../services/common.service';
import { ProgramService } from '../../services/program.service';
import { SponserCommentComponent } from './sponser-comment/sponser-comment.component';
import { AdvInfoComponent } from './adv-info/adv-info.component';
@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['../../app.component.scss', './ad-details.component.scss'],
})
export class AdDetailsComponent implements OnInit {
  adCompanyDetail: any;
  adReqDetails: any;
  disabled: boolean = false;
  msgCount: any;
  constructor(private navParams: NavParams,
    private commonService: CommonService,
    private programService: ProgramService) {
    this.adReqDetails = this.navParams.data.adDetails;
  }

  ngOnInit() {

   }

  ionViewWillEnter() {
    this.commonService.presentLoader();
    this.programService.getAdCompanyDetails({ 'adReqId': this.adReqDetails.id }).subscribe(data => { 
      this.commonService.dismissLoader();
      this.msgCount =  data.data.count;
      console.log(this.msgCount);
      this.adCompanyDetail = data.data.details.filter((el,i) => {
       
        if (el.consultant_approval) {
          this.disabled = true;
        }
        return el;
      });
    },
    err=>{
      this.commonService.dismissLoader();
    }
    ); 
  }

  acceptRequest(event) {
    let btn = [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay');
          this.sendRequest(event);
        }
      }
    ];



    this.commonService.presentAlert('Accept Request', 'Are you sure?', btn)
  }

  sendRequest(event) {
    this.programService.acceptSponsers({ 'acceptId': event, 'adReqId': this.adReqDetails.id }).subscribe(data => {
      this.disabled = data.data
      this.closeModal();
    });
  }

  closeModal() {
    this.commonService.dismissModal();
  }

  showSponsersChat(event){
    this.commonService.presentModal(SponserCommentComponent,'fullModal',{'adDetails':event});
  }

  showSponsersContent(event){
    this.commonService.presentModal(AdvInfoComponent,'fullModal',{'adDetails':event});
  }
}
