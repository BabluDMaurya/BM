import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicplayerPage } from './musicplayer.page';

const routes: Routes = [
  {
    path: '',
    component: MusicplayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicplayerPageRoutingModule {}
