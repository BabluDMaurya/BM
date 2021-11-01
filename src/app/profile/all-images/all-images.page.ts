import { Component, OnInit, ViewChild } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import {  ActivatedRoute, ParamMap } from "@angular/router";
import { PeopleViewService } from './../../services/people-view.service';
import { Platform, NavController, IonInfiniteScroll } from '@ionic/angular';
import { Config } from './../../config/config';
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';

@Component({
  selector: 'app-all-images',
  templateUrl: './all-images.page.html',
  styleUrls: ['./../../app.component.scss', './all-images.page.scss'],
})
export class AllImagesPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  consultID: any;
  consultName: any;
  myPosts: any = [];
  last_page: any;
  currentPage: any = 0;
  url: any = Config.imgUrl;

  constructor(private photoViewer: PhotoViewer,
    public platform: Platform,
    private navCtrl: NavController,
    private actRoute: ActivatedRoute,
    public modalController: ModalController,
    private peopleView: PeopleViewService) {

  }

  ngOnInit() {
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      this.consultID = params.get('userId');
      this.consultName = params.get('userName');
    });
    
    this.peopleView.getMyPost('1', this.consultID, 1).subscribe((data: any) => {

      data.posts.data.forEach(element => {

        this.myPosts.push(element);
      });
      this.last_page = data.posts.last_page;
      this.currentPage = data.posts.current_page;
      // this.gotData = true;
      console.log(this.myPosts);
    });
  }
  viewImg() {
    this.photoViewer.show('http://dev.betadelivery.com/helpyfolks/site/img/blog_img.jpg');
  }
  goBack() {
    this.navCtrl.back();
  }

  // ------------ laod data event ----------

  loadData(event) {

    if (this.currentPage != 0) {
      this.peopleView.getMyPost('1', this.consultID, (this.currentPage + 1)).subscribe((data: any) => {
        data.posts.data.forEach(element => {
          this.myPosts.push(element);
        });
        this.last_page = data.posts.last_page;
        this.currentPage = data.posts.current_page;
      });
    }
    event.target.complete();
    if (this.last_page == (this.currentPage + 1)) {
      event.target.disabled = true;
    }

  }

  async openViewer(path) {
    console.log(this.url + path);
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: this.url + path, // required
      },
      cssClass: 'ion-img-viewer', // required
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }

}
