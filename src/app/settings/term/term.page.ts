import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-term',
  templateUrl: './term.page.html',
  styleUrls: ['./../../app.component.scss','./term.page.scss'],
})
export class TermPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  goBack() {
    this.navCtrl.back();
  }
}
