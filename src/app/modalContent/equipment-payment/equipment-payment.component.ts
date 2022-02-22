import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ProgramService } from '../../services/program.service';

@Component({
  selector: 'app-equipment-payment',
  templateUrl: './equipment-payment.component.html',
  styleUrls: ['./equipment-payment.component.scss'],
})
export class EquipmentPaymentComponent implements OnInit {
  @Input() pgamount;
  constructor(private commonService:CommonService,private programService: ProgramService) { }

  ngOnInit() {}
  closeModal(data) {
    this.commonService.dismissModal(data);
  }

  payment(){
    this.programService.insertEquipmentPaymentDetail({"program_id" : this.pgamount, "amount" : this.pgamount }).subscribe(data => {
      console.log(data);
      this.commonService.dismissModal(data);
      this.commonService.presentToast("Payment Done.")
     
    });
  }
}
