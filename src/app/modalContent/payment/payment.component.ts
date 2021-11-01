import { Component, OnInit, Input } from '@angular/core';
import { Config } from '../../config/config';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
import { ThankyouComponent } from 'src/app/paypal/thankyou/thankyou.component';
import { ProgramService } from '../../services/program.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./../../app.component.scss','./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  @Input() pgid;
  @Input() pgname;
  @Input() pgamount;
  @Input() pgimg;
  @Input() routeLink;
  @Input() type;
  url: any = Config.ApiUrl;
  paymentData: any;
  constructor(private commonService:CommonService,private router: Router,private programService: ProgramService,) { }

  ngOnInit() {
    console.log(this.pgid);
  }
  closeModal(data) {
    this.commonService.dismissModal(data);
    if(this.routeLink == 'confrence'){
      this.router.navigateByUrl('/tabs/program');
    }
  }
  payment(){
    this.commonService.dismissModal();
    if(this.type == 2){
    this.programService.insertProgPaymentDetail({"program_id" : this.pgid, "amount" : this.pgamount }).subscribe(data => {
      console.log(data);
      if(data){
        var fileData = {
          pgid : this.pgid,
          pgname : this.pgname,
          pgamount : this.pgamount,
          pgimg : this.pgimg,
          } 
        this.commonService.presentModal(ThankyouComponent, 'fullModal', fileData);
      }
    });
  }else if(this.type == 1){
    this.programService.insertIntoactivePaymentDetail({"program_id" : this.pgid, "amount" : this.pgamount }).subscribe(data => {
      console.log(data);
      if(data){
        var fileData = {
          pgid : this.pgid.toString(','),
          pgname : this.pgname,
          pgamount : this.pgamount,
          pgimg : this.pgimg,
          } 
        this.commonService.presentModal(ThankyouComponent, 'fullModal', fileData);
      }
    });
  }
    
  }
}
