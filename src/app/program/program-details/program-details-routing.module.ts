import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramDetailsPage } from './program-details.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramDetailsPageRoutingModule {}
