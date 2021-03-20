import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPrivatePageRoutingModule } from './add-private-routing.module';

import { AddPrivatePage } from './add-private.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddPrivatePageRoutingModule
  ],
  declarations: [AddPrivatePage]
})
export class AddPrivatePageModule {}
