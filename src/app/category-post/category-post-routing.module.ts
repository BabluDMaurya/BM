import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryPostPage } from './category-post.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryPostPageRoutingModule {}
