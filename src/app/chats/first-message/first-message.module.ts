import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstMessagePageRoutingModule } from './first-message-routing.module';

import { FirstMessagePage } from './first-message.page';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstMessagePageRoutingModule,LazyLoadImageModule
  ],
  declarations: [FirstMessagePage]
})
export class FirstMessagePageModule {}
