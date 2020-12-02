import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllImagesPage } from './all-images.page';

const routes: Routes = [
  {
    path: '',
    component: AllImagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllImagesPageRoutingModule {}
