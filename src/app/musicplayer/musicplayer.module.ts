import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicplayerPageRoutingModule } from './musicplayer-routing.module';

import { MusicplayerPage } from './musicplayer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicplayerPageRoutingModule
  ],
  declarations: [MusicplayerPage]
})
export class MusicplayerPageModule {}
