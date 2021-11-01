import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookmarkPageRoutingModule } from './bookmark-routing.module';

import { BookmarkPage } from './bookmark.page';
import { BookmarkPostCommentComponent } from '../bookmark/bookmark-post-comment/bookmark-post-comment.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BookmarkPageRoutingModule,
    LazyLoadImageModule
  ],
  declarations: [BookmarkPage,BookmarkPostCommentComponent],
  entryComponents: [BookmarkPostCommentComponent]
})
export class BookmarkPageModule {}
