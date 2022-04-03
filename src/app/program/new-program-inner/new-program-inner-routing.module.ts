import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewProgramInnerPage } from './new-program-inner.page';

const routes: Routes = [
  {
    path: '',
    component: NewProgramInnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewProgramInnerPageRoutingModule {}
