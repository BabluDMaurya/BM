import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileViewPage } from './user-profile-view.page';

const routes: Routes = [
  {
    path: '',
    component: UserProfileViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileViewPageRoutingModule {}
