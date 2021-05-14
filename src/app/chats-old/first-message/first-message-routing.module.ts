import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstMessagePage } from './first-message.page';

const routes: Routes = [
  {
    path: '',
    component: FirstMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstMessagePageRoutingModule {}
