import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DateTestPageRoutingModule } from './date-test-routing.module';

import { DateTestPage } from './date-test.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DateTestPageRoutingModule,
    Ng2SearchPipeModule,
  ],
  declarations: [DateTestPage]
})
export class DateTestPageModule {}
