import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvitatedProgramsPage } from './invitated-programs.page';

const routes: Routes = [
  {
    path: '',
    component: InvitatedProgramsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitatedProgramsPageRoutingModule {}
