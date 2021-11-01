import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultantVideosPageRoutingModule } from './consultant-videos-routing.module';

import { ConsultantVideosPage } from './consultant-videos.page';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { LazyLoadImageModule } from 'ng-lazyload-image';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultantVideosPageRoutingModule,
    NgxIonicImageViewerModule,
    LazyLoadImageModule
  ],
  declarations: [ConsultantVideosPage]
})
export class ConsultantVideosPageModule {}
