import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PaymentsService } from './../../services/payments.service'
@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.page.html',
  styleUrls: ['./../../app.component.scss','./payment-history.page.scss'],
})


export class PaymentHistoryPage implements OnInit {
  paymentData: any;
  constructor(public navCtrl: NavController, private paymentService: PaymentsService) { }

  ngOnInit() {
    this.paymentService.getPaymentHistory().subscribe(data =>{ 
      console.log(data);
      console.log(data.data);
      this.paymentData = data.data;
    });
  }
  goBack() {
    this.navCtrl.back();
  }

}
