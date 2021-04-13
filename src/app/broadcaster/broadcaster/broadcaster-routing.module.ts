import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BroadcasterPage } from './broadcaster.page';

const routes: Routes = [
  {
    path: '',
    component: BroadcasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BroadcasterPageRoutingModule {}
