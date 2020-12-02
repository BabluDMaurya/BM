import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss','./../../app.component.scss'],
})
export class PrivacyPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  goBack() {
    this.navCtrl.back();
  }
}
