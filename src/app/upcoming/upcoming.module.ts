import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingPageRoutingModule } from './upcoming-routing.module';

import { UpcomingPage } from './upcoming.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcomingPageRoutingModule
  ],
  declarations: [UpcomingPage]
})
export class UpcomingPageModule {}
