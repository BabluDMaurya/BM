import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommonSliderPageRoutingModule } from './common-slider-routing.module';

import { CommonSliderPage } from './common-slider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonSliderPageRoutingModule
  ],
  declarations: [CommonSliderPage]
})
export class CommonSliderPageModule {}
