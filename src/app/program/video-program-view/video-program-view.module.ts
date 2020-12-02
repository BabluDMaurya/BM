import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoProgramViewPageRoutingModule } from './video-program-view-routing.module';

import { VideoProgramViewPage } from './video-program-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoProgramViewPageRoutingModule
  ],
  declarations: [VideoProgramViewPage]
})
export class VideoProgramViewPageModule {}
