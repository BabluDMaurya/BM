import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-modal-mineral',
  templateUrl: './modal-mineral.component.html',
  styleUrls: ['../../app.component.scss','./modal-mineral.component.scss']
})
export class ModalMineralComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  ngOnInit() {}
  closeModal(){
    this.commonService.dismissModal();
  }
}
