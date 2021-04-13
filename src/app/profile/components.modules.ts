import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {PostTabComponent} from './my-profile/post-tab/post-tab.component';
import {UpcomingTabComponent} from './my-profile/upcoming-tab/upcoming-tab.component';
import {ExpandableComponent} from '../nutrition/expandable/expandable.component';
// import {AudioPlayerComponent} from '../audio-player/audio-player.component';

import { AudioPlayerComponent } from '../music/audio-player/audio-player.component';

@NgModule({
    imports: [
      CommonModule,
      IonicModule,
      FormsModule,
      RouterModule
    ],
    declarations: [PostTabComponent,UpcomingTabComponent,AudioPlayerComponent,ExpandableComponent],
    exports: [PostTabComponent,UpcomingTabComponent,AudioPlayerComponent,ExpandableComponent],
    entryComponents: [],
  })


  
export class ComponentModule {}