import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPrivatePage } from './add-private.page';

const routes: Routes = [
  {
    path: '',
    component: AddPrivatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPrivatePageRoutingModule {}
