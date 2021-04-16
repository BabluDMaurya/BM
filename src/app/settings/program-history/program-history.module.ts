import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramHistoryPageRoutingModule } from './program-history-routing.module';

import { ProgramHistoryPage } from './program-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramHistoryPageRoutingModule
  ],
  declarations: [ProgramHistoryPage]
})
export class ProgramHistoryPageModule {}
