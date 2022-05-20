import { Component, OnInit } from '@angular/core';

import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.scss'],
})
export class TermsConditionComponent implements OnInit {

  constructor(public commonService:CommonService,) { }

  ngOnInit() {}
  closeModal()
  {
    this.commonService.dismissModal();
  }
}
