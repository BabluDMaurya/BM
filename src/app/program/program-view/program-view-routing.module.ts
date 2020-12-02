import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramViewPage } from './program-view.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramViewPageRoutingModule {}
