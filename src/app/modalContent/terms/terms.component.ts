import { Component, OnInit } from '@angular/core';

import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
})
export class TermsComponent implements OnInit {

  constructor(public commonService:CommonService,) { }

  ngOnInit() {}
  closeModal()
  {
    this.commonService.dismissModal();
  }
}
