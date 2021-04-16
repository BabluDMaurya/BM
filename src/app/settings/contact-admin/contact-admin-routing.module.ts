import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactAdminPage } from './contact-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ContactAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactAdminPageRoutingModule {}
