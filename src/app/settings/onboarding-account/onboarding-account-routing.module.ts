import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboardingAccountPage } from './onboarding-account.page';

const routes: Routes = [
  {
    path: '',
    component: OnboardingAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingAccountPageRoutingModule {}
