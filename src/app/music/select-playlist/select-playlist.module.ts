import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SelectPlaylistPageRoutingModule } from './select-playlist-routing.module';
import { SelectPlaylistPage } from './select-playlist.page';
import { ComponentModule } from '../../profile/components.modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    SelectPlaylistPageRoutingModule
  ],
  declarations: [SelectPlaylistPage]
})
export class SelectPlaylistPageModule {}
