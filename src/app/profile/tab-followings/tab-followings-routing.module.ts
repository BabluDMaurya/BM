import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabFollowingsPage } from './tab-followings.page';

const routes: Routes = [
  {
    path: '',
    component: TabFollowingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabFollowingsPageRoutingModule {}
