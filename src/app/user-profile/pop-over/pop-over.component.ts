import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams, Events } from '@ionic/angular';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.scss'],
})
export class PopOverComponent implements OnInit {
  page;
  constructor(
    private events: Events,
    private navParams: NavParams,
    private popoverController: PopoverController) {

  }
  ngOnInit() {
    this.page = this.navParams.get('data');
  }

  wifiSetting() {
    // code for setting wifi option in apps
  }

  logout() {
	// code for logout
  }
  eventFromPopover() {
    this.events.publish('fromPopoverEvent');
    this.popoverController.dismiss();
  }

}
