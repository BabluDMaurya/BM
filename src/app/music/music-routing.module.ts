import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicPage } from './music.page';

const routes: Routes = [
  {
    path: '',
    component: MusicPage
  },
  {
    path: 'select-playlist/:musicData',
    loadChildren: () => import('./select-playlist/select-playlist.module').then( m => m.SelectPlaylistPageModule)
  },
  {
    path: 'artist-songs/:artistData',
    loadChildren: () => import('./artist-songs/artist-songs.module').then( m => m.ArtistSongsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicPageRoutingModule {}
