import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-equipments-list',
  templateUrl: './equipments-list.component.html',
  styleUrls: ['../../app.component.scss','./equipments-list.component.scss'],
})
export class EquipmentsListComponent implements OnInit {

  constructor(
    public commonService: CommonService
  ) { }

  ngOnInit() {}
  closeModal(){
    this.commonService.dismissModal();
  }
}