import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartingSlidePage } from './starting-slide.page';

const routes: Routes = [
  {
    path: '',
    component: StartingSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartingSlidePageRoutingModule {}
