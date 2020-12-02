import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProgramPage } from './edit-program.page';

const routes: Routes = [
  {
    path: '',
    component: EditProgramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProgramPageRoutingModule {}
