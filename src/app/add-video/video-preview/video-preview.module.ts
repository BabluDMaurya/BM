import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoPreviewPageRoutingModule } from './video-preview-routing.module';

import { VideoPreviewPage } from './video-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VideoPreviewPageRoutingModule
  ],
  declarations: [VideoPreviewPage]
})
export class VideoPreviewPageModule {}