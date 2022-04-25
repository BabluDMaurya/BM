import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewProgramViewPageRoutingModule } from './new-program-view-routing.module';

import { NewProgramViewPage } from './new-program-view.page';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewProgramViewPageRoutingModule,
    LazyLoadImageModule
  ],
  declarations: [NewProgramViewPage]
})
export class NewProgramViewPageModule {}
