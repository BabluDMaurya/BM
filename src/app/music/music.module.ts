import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicPageRoutingModule } from './music-routing.module';
import { MusicPage } from './music.page';
import { ComponentModule } from '../profile/components.modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicPageRoutingModule,
    ComponentModule,
  ],
  entryComponents: [],
  declarations: [MusicPage  ]
})
export class MusicPageModule {
  
}
