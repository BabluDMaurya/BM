import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SponcerChatPage } from './sponcer-chat.page';

const routes: Routes = [
  {
    path: '',
    component: SponcerChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SponcerChatPageRoutingModule {}
