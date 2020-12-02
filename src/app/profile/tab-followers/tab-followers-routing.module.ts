import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabFollowersPage } from './tab-followers.page';

const routes: Routes = [
  {
    path: '',
    component: TabFollowersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabFollowersPageRoutingModule {}
