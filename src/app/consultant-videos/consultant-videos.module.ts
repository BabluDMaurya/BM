import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultantVideosPageRoutingModule } from './consultant-videos-routing.module';

import { ConsultantVideosPage } from './consultant-videos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultantVideosPageRoutingModule
  ],
  declarations: [ConsultantVideosPage]
})
export class ConsultantVideosPageModule {}
