import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimplebroadcasterPageRoutingModule } from './simplebroadcaster-routing.module';

import { SimplebroadcasterPage } from './simplebroadcaster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimplebroadcasterPageRoutingModule
  ],
  declarations: [SimplebroadcasterPage]
})
export class SimplebroadcasterPageModule {}
