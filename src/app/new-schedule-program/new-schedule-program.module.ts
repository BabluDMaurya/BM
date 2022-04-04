import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewScheduleProgramPageRoutingModule } from './new-schedule-program-routing.module';

import { NewScheduleProgramPage } from './new-schedule-program.page';
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCalendarModule,
    NewScheduleProgramPageRoutingModule
  ],
  declarations: [NewScheduleProgramPage],
})
export class NewScheduleProgramPageModule {}
