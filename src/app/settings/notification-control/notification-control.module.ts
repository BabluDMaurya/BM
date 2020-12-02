import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationControlPageRoutingModule } from './notification-control-routing.module';

import { NotificationControlPage } from './notification-control.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationControlPageRoutingModule
  ],
  declarations: [NotificationControlPage]
})
export class NotificationControlPageModule {}
