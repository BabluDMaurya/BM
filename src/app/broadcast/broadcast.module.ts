import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BroadcastPageRoutingModule } from './broadcast-routing.module';

import { BroadcastPage } from './broadcast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BroadcastPageRoutingModule
  ],
  declarations: [BroadcastPage]
})
export class BroadcastPageModule {}
