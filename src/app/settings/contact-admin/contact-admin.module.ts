import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactAdminPageRoutingModule } from './contact-admin-routing.module';

import { ContactAdminPage } from './contact-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ContactAdminPageRoutingModule
  ],
  declarations: [ContactAdminPage]
})
export class ContactAdminPageModule {}
