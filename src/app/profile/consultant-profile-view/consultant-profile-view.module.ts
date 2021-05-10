import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConsultantProfileViewPageRoutingModule } from './consultant-profile-view-routing.module';
import { ConsultantProfileViewPage } from './consultant-profile-view.page';
import { ChatPopupComponent } from '../consultant-profile-view/chat-popup/chat-popup.component';
import { ReportPopupComponent } from '../consultant-profile-view/report-popup/report-popup.component';
import { ComponentModule } from './../components.modules';
import { LazyLoadImageModule } from 'ng-lazyload-image';

// import { FixedFooterComponent } from '../fixed-footer/fixed-footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    ConsultantProfileViewPageRoutingModule,
    LazyLoadImageModule
  ],
  declarations: [ConsultantProfileViewPage,ChatPopupComponent,ReportPopupComponent],
  entryComponents: [ChatPopupComponent,ReportPopupComponent],
})
export class ConsultantProfileViewPageModule {}
