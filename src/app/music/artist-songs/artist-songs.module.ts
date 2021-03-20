import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular'; 
import { ArtistSongsPageRoutingModule } from './artist-songs-routing.module'; 
import { ArtistSongsPage } from './artist-songs.page';
import { ComponentModule } from '../../profile/components.modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    ArtistSongsPageRoutingModule
  ],
  declarations: [ArtistSongsPage]
})
export class ArtistSongsPageModule {}
