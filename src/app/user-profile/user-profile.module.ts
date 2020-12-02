import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfilePageRoutingModule } from './user-profile-routing.module';

import { UserProfilePage } from './user-profile.page';
import { PopOverComponent } from './pop-over/pop-over.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfilePageRoutingModule
  ],
  declarations: [UserProfilePage,PopOverComponent],
  entryComponents: [PopOverComponent],
})
export class UserProfilePageModule {}
