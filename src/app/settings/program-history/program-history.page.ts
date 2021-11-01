import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-program-history',
  templateUrl: './program-history.page.html',
  styleUrls: ['./program-history.page.scss','./../../app.component.scss'],
})
export class ProgramHistoryPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.back();
  }

}
