import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { UserModalComponent } from '../../add-program/user-modal/user-modal.component';

@Component({
  selector: 'app-add-video-complete',
  templateUrl: './add-video-complete.component.html',
  styleUrls: ['./../../app.component.scss','./add-video-complete.component.scss'],
})
export class AddVideoCompleteComponent implements OnInit {
  data: any;
  sliderOpts = {
    zoom:true,
    slidesPerView:3,
    centeredSlides:false,
    spaceBetween:1.5
  }
  constructor(public commonService: CommonService,) { }

  ngOnInit() {}
  selectUser(){
    this.commonService.presentModal(UserModalComponent,'fullModal','');
  }

}
