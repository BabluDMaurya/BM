import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramPageRoutingModule } from './program-routing.module';

import { ProgramPage } from './program.page';
import { HostingDropdownComponent } from '../hosting-dropdown/hosting-dropdown.component';

import { ComponentModule } from '../../profile/components.modules';
import { InviteRequestComponent } from './../invite-request/invite-request.component';
import { PipeModule } from '../../nutrition-list/pipe.module'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramPageRoutingModule,ComponentModule,
    PipeModule,
  ],
  declarations: [ProgramPage ,HostingDropdownComponent , 
    InviteRequestComponent],
  entryComponents: [HostingDropdownComponent,InviteRequestComponent]
})
export class ProgramPageModule {}
