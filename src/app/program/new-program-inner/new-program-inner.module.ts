import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewProgramInnerPageRoutingModule } from './new-program-inner-routing.module';

import { NewProgramInnerPage } from './new-program-inner.page';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewProgramInnerPageRoutingModule,
    LazyLoadImageModule
  ],
  declarations: [NewProgramInnerPage]
})
export class NewProgramInnerPageModule {}
