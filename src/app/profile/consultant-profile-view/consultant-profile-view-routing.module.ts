import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultantProfileViewPage } from './consultant-profile-view.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultantProfileViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultantProfileViewPageRoutingModule {}
