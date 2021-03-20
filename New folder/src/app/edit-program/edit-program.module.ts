import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  , ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EditProgramPageRoutingModule } from './edit-program-routing.module';

import { NgCalendarModule  } from 'ionic2-calendar';
import { EditProgramPage } from './edit-program.page';
import {ComponentModule} from '../profile/components.modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditProgramPageRoutingModule,
    NgCalendarModule,
    ComponentModule
  ],
  declarations: [EditProgramPage]
})
export class EditProgramPageModule {}
