import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnboardingAccountPageRoutingModule } from './onboarding-account-routing.module';

import { OnboardingAccountPage } from './onboarding-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardingAccountPageRoutingModule
  ],
  declarations: [OnboardingAccountPage]
})
export class OnboardingAccountPageModule {}
