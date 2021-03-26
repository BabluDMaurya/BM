import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPostPageRoutingModule } from './add-post-routing.module';

import { FileUploadModule } from 'ng2-file-upload';
import { AddPostPage } from './add-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule,
    ReactiveFormsModule,
    IonicModule,
    AddPostPageRoutingModule
  ],
  declarations: [AddPostPage]
})
export class AddPostPageModule {}
