import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams, Events } from '@ionic/angular';

@Component({
  selector: 'app-report-popup',
  templateUrl: './report-popup.component.html',
  styleUrls: ['./report-popup.component.scss'],
})
export class ReportPopupComponent implements OnInit {
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
