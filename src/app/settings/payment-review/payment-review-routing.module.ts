import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentReviewPage } from './payment-review.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentReviewPageRoutingModule {}
