import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoProgramViewPage } from './video-program-view.page';

const routes: Routes = [
  {
    path: '',
    component: VideoProgramViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoProgramViewPageRoutingModule {}
