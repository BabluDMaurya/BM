import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewProgramViewPage } from './new-program-view.page';

const routes: Routes = [
  {
    path: '',
    component: NewProgramViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewProgramViewPageRoutingModule {}
