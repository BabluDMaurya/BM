import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
})
export class PrivacyComponent implements OnInit {

  constructor(public commonService:CommonService) { }

  ngOnInit() {}
  closeModal()
  {
    this.commonService.dismissModal();
  }
}
