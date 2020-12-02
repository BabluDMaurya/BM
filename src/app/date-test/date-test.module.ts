import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DateTestPageRoutingModule } from './date-test-routing.module';

import { DateTestPage } from './date-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DateTestPageRoutingModule
  ],
  declarations: [DateTestPage]
})
export class DateTestPageModule {}
