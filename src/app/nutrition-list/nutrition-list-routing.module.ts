import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NutritionListPage } from './nutrition-list.page';

const routes: Routes = [
  {
    path: '',
    component: NutritionListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutritionListPageRoutingModule {}
