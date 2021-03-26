import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllListPageRoutingModule } from './all-list-routing.module';

import { AllListPage } from './all-list.page';
import { ComponentModule } from '../../profile/components.modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    AllListPageRoutingModule
  ],
  declarations: [AllListPage]
})
export class AllListPageModule {}
