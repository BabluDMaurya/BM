import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookmarkPageRoutingModule } from './bookmark-routing.module';

import { BookmarkPage } from './bookmark.page';
import { BookmarkPostCommentComponent } from '../bookmark/bookmark-post-comment/bookmark-post-comment.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BookmarkPageRoutingModule
  ],
  declarations: [BookmarkPage,BookmarkPostCommentComponent],
  entryComponents: [BookmarkPostCommentComponent]
})
export class BookmarkPageModule {}
