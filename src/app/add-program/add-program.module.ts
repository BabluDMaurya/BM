import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProgramPageRoutingModule } from './add-program-routing.module';
import { AudioPlayerProgramComponent } from '../audio-player-program/audio-player-program.component';

import { AddProgramPage } from './add-program.page';
import { NgCalendarModule  } from 'ionic2-calendar';
import { ComponentModule } from '../profile/components.modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddProgramPageRoutingModule,
    NgCalendarModule,
    ComponentModule,
  ],
  declarations: [AddProgramPage ,
    AudioPlayerProgramComponent]
})
export class AddProgramPageModule {}
