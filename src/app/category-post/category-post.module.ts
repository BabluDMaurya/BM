import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryPostPageRoutingModule } from './category-post-routing.module';

import { CategoryPostPage } from './category-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryPostPageRoutingModule
  ],
  declarations: [CategoryPostPage]
})
export class CategoryPostPageModule {}
