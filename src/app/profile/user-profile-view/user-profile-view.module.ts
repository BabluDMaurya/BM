import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfileViewPageRoutingModule } from './user-profile-view-routing.module';

import { UserProfileViewPage } from './user-profile-view.page';
import { MessagePopupComponent } from './message-popup/message-popup.component';
import { ReportPopupComponent } from './report-popup/report-popup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfileViewPageRoutingModule
  ],
  declarations: [UserProfileViewPage,MessagePopupComponent,ReportPopupComponent],
  entryComponents: [MessagePopupComponent,ReportPopupComponent],
})
export class UserProfileViewPageModule {}
