import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment-review',
  templateUrl: './payment-review.page.html',
  styleUrls: ['./payment-review.page.scss'],
})
export class PaymentReviewPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.back();
  }

}
