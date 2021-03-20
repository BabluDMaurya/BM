import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryPagePage } from './category-page.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryPagePageRoutingModule {}
