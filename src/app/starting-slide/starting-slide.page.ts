import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController, IonSlides } from '@ionic/angular';

import { Storage } from '@ionic/storage';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-starting-slide',
  templateUrl: './starting-slide.page.html',
  styleUrls: ['./starting-slide.page.scss'],
})
export class StartingSlidePage {
  showSkip = true;

  @ViewChild('slides', { static: true }) slides: IonSlides;

  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage,
    public commonService:CommonService
  ) {  }

  startApp() {
    this.router
      .navigateByUrl('/signin', { replaceUrl: true })
      .then(() => this.storage.set('ion_did_tutorial', true));
  }
  startApp2() {
    this.router
      .navigateByUrl('/signup', { replaceUrl: true })
      .then(() => this.storage.set('ion_did_tutorial', true));
  }
  homeOptions = {
      initialSlide: 0,
      loop: false,
      autoplay:true,
      autoplayDisableOnInteraction: false
    };
  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }

  ionViewWillEnter() {
    this.storage.get('ion_did_tutorial').then(res => { 
      if (res === true) {
       this.router.navigateByUrl('/signin', { replaceUrl: true });
      }
    });

    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
   
}
