import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slider-zoom',
  templateUrl: './slider-zoom.component.html',
  styleUrls: ['./slider-zoom.component.scss'],
})
export class SliderZoomComponent implements OnInit {
  img:any;
  @ViewChild('slider', { read: ElementRef, static: true })slider: ElementRef;
  sliderOpts = {
    zoom: {
      maxRatio :5
    }
  };
  constructor(private navParams: NavParams, private modalController: ModalController) { }
  ngOnInit() {
    this.img = this.navParams.get('img');
  }
  zoom(zoomIn: boolean){
    let zoom = this.slider.nativeElement.swiper.zoom;
    if (zoomIn){
      zoom.in();
    }
    else{
      zoom.out();
    }
  }
  close(){
    this.modalController.dismiss();
  }
}
