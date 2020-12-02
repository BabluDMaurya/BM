import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllImagesPageRoutingModule } from './all-images-routing.module';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

import { AllImagesPage } from './all-images.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxIonicImageViewerModule,
    AllImagesPageRoutingModule
  ],
  declarations: [AllImagesPage]
})
export class AllImagesPageModule { }
