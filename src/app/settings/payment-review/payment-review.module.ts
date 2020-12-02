import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentReviewPageRoutingModule } from './payment-review-routing.module';

import { PaymentReviewPage } from './payment-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentReviewPageRoutingModule
  ],
  declarations: [PaymentReviewPage]
})
export class PaymentReviewPageModule {}
