import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationControlPage } from './notification-control.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationControlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationControlPageRoutingModule {}
