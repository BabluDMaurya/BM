import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingPage } from './upcoming.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcomingPageRoutingModule {}
