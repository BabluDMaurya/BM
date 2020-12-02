import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentHistoryPageRoutingModule } from './payment-history-routing.module';

import { PaymentHistoryPage } from './payment-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentHistoryPageRoutingModule
  ],
  declarations: [PaymentHistoryPage]
})
export class PaymentHistoryPageModule {}
