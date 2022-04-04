import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProgramPage } from './add-program.page';

const routes: Routes = [
  {
    path: '',
    component: AddProgramPage
  },
  {
    path: 'program-details/:programId',
    loadChildren: () => import('./program-details/program-details.module').then( m => m.ProgramDetailsPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProgramPageRoutingModule {}
