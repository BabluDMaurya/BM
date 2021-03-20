import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NutritionListPageRoutingModule } from './nutrition-list-routing.module';

import { NutritionListPage } from './nutrition-list.page';
import { NutritionDetailModalComponent } from '../nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component';

import { ComponentModule } from '../profile/components.modules';
import { PipeModule } from './pipe.module'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,  
    NutritionListPageRoutingModule,
    PipeModule,
  ],
  declarations: [NutritionListPage,NutritionDetailModalComponent ],
  entryComponents: [NutritionDetailModalComponent]
})
export class NutritionListPageModule {}
