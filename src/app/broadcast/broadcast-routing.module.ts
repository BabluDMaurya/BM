import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BroadcastPage } from './broadcast.page';

const routes: Routes = [
  {
    path: '',
    component: BroadcastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BroadcastPageRoutingModule {}
