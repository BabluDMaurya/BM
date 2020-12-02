import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostPreviewPageRoutingModule } from './post-preview-routing.module';

import { PostPreviewPage } from './post-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostPreviewPageRoutingModule
  ],
  declarations: [PostPreviewPage]
})
export class PostPreviewPageModule {}
