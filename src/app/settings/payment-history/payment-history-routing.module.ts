import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentHistoryPage } from './payment-history.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentHistoryPageRoutingModule {}
