import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabFollowingsPageRoutingModule } from './tab-followings-routing.module';

import { TabFollowingsPage } from './tab-followings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabFollowingsPageRoutingModule
  ],
  declarations: [TabFollowingsPage]
})
export class TabFollowingsPageModule {}
