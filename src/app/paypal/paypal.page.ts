import { Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { ActivatedRoute, ParamMap,NavigationExtras,Router } from '@angular/router';
import { ProgramService } from '../services/program.service';
import { Config } from './../config/config';
import { NavController } from '@ionic/angular';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.page.html',
  styleUrls: ['./../app.component.scss','./paypal.page.scss'],
})
export class PaypalPage implements OnInit {

  constructor(private router: Router,public commonService: CommonService,public navCtrl: NavController,private payPal: PayPal,private actRoute: ActivatedRoute,private programService: ProgramService,) { }
  pgid : any;
  paymentAmount: string ;
  currency: string = 'USD';
  currencyIcon: string = '$';
  //currency: string = 'IN';
  //currencyIcon: string = '₹';
  programDetail :any;
  programFee : any;
  programImage : any;
  pgtitle :any;
  url = Config.imgUrl;
  ngOnInit() {
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      this.pgid = params.get('pgid');
    });
  }
  ionViewWillEnter() {
    this.programService.getProgramById({ "programId": this.pgid }).subscribe(data => {
      console.log(data.programData);
      this.pgtitle = data.programData.title;   
      this.programDetail = data.programData;
      if(this.programDetail.payment_type == 'Paid'){
        this.paymentAmount = this.programDetail.program_fee;
      }else if(this.programDetail.payment_type == 'Free'){
        this.paymentAmount = this.programDetail.payment_type;
      }
      if(data.programData.image_path)
      {
        this.programDetail.img_array =data.programData.image_path.split(','); 
        this.programImage = this.programDetail.img_array[0];
      }  
    });
  }
  goBack() {
    // this.navCtrl.back();
    this.router.navigateByUrl('/tabs/program');
  }
  payWithPaypal() {
    console.log("Pay ????");
    var fileData = {
      pgid : this.pgid,
      pgname : this.pgtitle,
      pgamount : this.paymentAmount,
      pgimg : this.programImage,
      } 
    this.payPal.init({
      PayPalEnvironmentProduction: 'AUfbdB9-bSHraLUqX148NzQJmJdtZtSan0MTC_wUF-eCgKyhOxN1Qrgyj4w_fYnXu4q34TTMOKvTLbEc',
      PayPalEnvironmentSandbox: 'AVSNND2JZDDR4lO4D-IuX-EuO4td1zzxzzXL7hkatv0CnBQTK43E5PnzIWC0QbPD1gzlx5Cwwla20oc7'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {       
        let payment = new PayPalPayment(this.paymentAmount, this.currency, 'Description', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then(() => {
          // Successfully paid
          
          // Example sandbox response
          //
          // {
          //   "client": {
          //     "environment": "sandbox",
          //     "product_name": "PayPal iOS SDK",
          //     "paypal_sdk_version": "2.16.0",
          //     "platform": "iOS"
          //   },
          //   "response_type": "payment",
          //   "response": {
          //     "id": "PAY-1AB23456CD789012EF34GHIJ",
          //     "state": "approved",
          //     "create_time": "2016-10-03T13:33:33Z",
          //     "intent": "sale"
          //   }
          // }
          // this.commonService.presentModal(ThankyouComponent, 'fullModal', fileData);
        }, () => {
          // Error or render dialog closed without being successful
          // this.commonService.presentModal(ThankyouComponent, 'fullModal', fileData);
        });
      }, () => {
        // Error in configuration
        // this.commonService.presentModal(ThankyouComponent, 'fullModal', fileData);
      });
    }, () => {
      // Error in initialization, maybe PayPal isn't supported or something else
      // this.commonService.presentModal(ThankyouComponent, 'fullModal', fileData);
    });
  }
}
