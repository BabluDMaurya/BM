import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitatedProgramsPageRoutingModule } from './invitated-programs-routing.module';

import { InvitatedProgramsPage } from './invitated-programs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvitatedProgramsPageRoutingModule
  ],
  declarations: [InvitatedProgramsPage]
})
export class InvitatedProgramsPageModule {}
