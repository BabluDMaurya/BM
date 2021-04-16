import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabFollowersPageRoutingModule } from './tab-followers-routing.module';

import { TabFollowersPage } from './tab-followers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabFollowersPageRoutingModule
  ],
  declarations: [TabFollowersPage]
})
export class TabFollowersPageModule {}
