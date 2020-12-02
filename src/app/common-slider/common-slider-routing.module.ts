import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonSliderPage } from './common-slider.page';

const routes: Routes = [
  {
    path: '',
    component: CommonSliderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonSliderPageRoutingModule {}
