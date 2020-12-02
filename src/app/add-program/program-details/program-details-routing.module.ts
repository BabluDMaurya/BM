import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProgramDetailsPage } from './program-details.page';

import { ComponentModule } from '../../profile/components.modules';
const routes: Routes = [
  {
    path: '',
    component: ProgramDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    FormsModule,
    IonicModule,
    ComponentModule
  ],
  exports: [RouterModule],
})
export class ProgramDetailsPageRoutingModule {}
