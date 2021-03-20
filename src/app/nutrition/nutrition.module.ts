import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NutritionPageRoutingModule } from './nutrition-routing.module';
import { NutritionPreviewComponent } from './nutrition-preview/nutrition-preview.component';
import { NutritionPage } from './nutrition.page';
import { ComponentModule } from '../profile/components.modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentModule,
    NutritionPageRoutingModule
  ],
  entryComponents: [NutritionPreviewComponent],
  declarations: [NutritionPage, NutritionPreviewComponent]
})
export class NutritionPageModule { }
