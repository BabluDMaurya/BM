import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.page.html',
  styleUrls: ['./../../app.component.scss','./payment-history.page.scss'],
})
export class PaymentHistoryPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  goBack() {
    this.navCtrl.back();
  }

}
