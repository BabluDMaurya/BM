import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewScheduleProgramPage } from './new-schedule-program.page';

const routes: Routes = [
  {
    path: '',
    component: NewScheduleProgramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewScheduleProgramPageRoutingModule {}
