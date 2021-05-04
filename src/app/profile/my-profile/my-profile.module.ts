import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyProfilePageRoutingModule } from './my-profile-routing.module';
import { ComponentModule } from './../components.modules';
import { MyProfilePage } from './my-profile.page';
import { BrowserModule } from '@angular/platform-browser';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { LazyLoadImageModule } from 'ng-lazyload-image';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyProfilePageRoutingModule,
    ComponentModule     ,
    NgxIonicImageViewerModule,
    LazyLoadImageModule
  ],
  entryComponents: [],
  declarations: [MyProfilePage ]
})
export class MyProfilePageModule {}
