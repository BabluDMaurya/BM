import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistSongsPage } from './artist-songs.page';

const routes: Routes = [
  {
    path: '',
    component: ArtistSongsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistSongsPageRoutingModule {}
