import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramDetailsPageRoutingModule } from './program-details-routing.module';

import { ProgramDetailsPage } from './program-details.page';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramDetailsPageRoutingModule,
    LazyLoadImageModule
  ],
  declarations: [ProgramDetailsPage]
})
export class ProgramDetailsPageModule {}
