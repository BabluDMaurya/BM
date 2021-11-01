import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.component.html',
  styleUrls: ['../../../app.component.scss','./share-modal.component.scss'],
})
export class ShareModalComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  ngOnInit() {}
  closeModal(){
    this.commonService.dismissModal();
  }
}
