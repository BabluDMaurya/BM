import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllListPage } from './all-list.page';

const routes: Routes = [
  {
    path: '',
    component: AllListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllListPageRoutingModule {}
