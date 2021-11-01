import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute, ParamMap} from "@angular/router";
import { PaymentsService } from './../../services/payments.service';
@Component({
  selector: 'app-payment-review',
  templateUrl: './payment-review.page.html',
  // styleUrls: ['./payment-review.page.scss'],
  styleUrls: ['./../../app.component.scss','./payment-review.page.scss'],
})
export class PaymentReviewPage implements OnInit {
  paymentID : any;
  paymentData: any;
  programName: any;
  transactionId: any;
  paymentDate: any;
  amount: any;
  constructor(public navCtrl: NavController,private paymentService: PaymentsService,
    private actRoute: ActivatedRoute,) { 
      this.actRoute.paramMap.subscribe((params: ParamMap) => {                 
        console.log(params);   
        this.paymentID = params.get('id');
      }); 
    }

  ngOnInit() {
    this.paymentService.getPaymentDetails({'id':this.paymentID}).subscribe(data =>{ 
      
      console.log(data.data[0].programs);
      this.paymentData = data.data[0];
      this.programName = data.data[0].programs[0].title;
      this.amount = data.data[0].amount;
      this.transactionId = data.data[0].transaction_id;
      this.paymentDate = data.data[0].created_at;
      console.log(this.paymentData);
    });
  }
  goBack(){
    this.navCtrl.back();
  }

}
