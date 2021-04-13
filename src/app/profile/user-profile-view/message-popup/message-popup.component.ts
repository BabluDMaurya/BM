import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams, Events } from '@ionic/angular';

@Component({
  selector: 'app-message-popup',
  templateUrl: './message-popup.component.html',
  styleUrls: ['./message-popup.component.scss'],
})
export class MessagePopupComponent implements OnInit {
  page;
  constructor(
    private events: Events,
    private navParams: NavParams,
    private popoverController: PopoverController) {

  }

  ngOnInit() {
    this.page = this.navParams.get('data');
  }

  eventFromPopover() {
    this.events.publish('fromPopoverEvent');
    this.popoverController.dismiss();
  }

}
