import { Component, OnInit,Input } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Config } from '../../config/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./../../app.component.scss','./thankyou.component.scss'],
})
export class ThankyouComponent implements OnInit {
  @Input() pgid;
  @Input() pgname;
  @Input() pgamount;
  @Input() pgimg;
  url: any = Config.ApiUrl;
  currencyIcon: string = '$';
  constructor(public commonService:CommonService,private router: Router,) { }
  ngOnInit() {}
  closeModal()
  {
    this.commonService.dismissModal();
    this.router.navigateByUrl('/tabs/program');
  }
}
