import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BroadcasterPageRoutingModule } from './broadcaster-routing.module';

import { BroadcasterPage } from './broadcaster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BroadcasterPageRoutingModule
  ],
  declarations: [BroadcasterPage]
})
export class BroadcasterPageModule {}
