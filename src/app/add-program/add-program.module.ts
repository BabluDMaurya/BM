import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProgramPageRoutingModule } from './add-program-routing.module';
import { AudioPlayerProgramComponent } from '../audio-player-program/audio-player-program.component';
import { ProgramNutritionDetailModalComponent } from './../add-program/program-nutrition-detail-modal/program-nutrition-detail-modal.component';
// import { ViewVideoDetailComponent } from './../add-program/view-video-detail/view-video-detail.component';
import { AddProgramPage } from './add-program.page';
import { NgCalendarModule  } from 'ionic2-calendar';
import { ComponentModule } from '../profile/components.modules';
import { CalenderMonthWeekTimeComponent } from './../add-program/calender-month-week-time/calender-month-week-time.component';
import { TermsConditionComponent } from 'src/app/modalContent/terms-condition/terms-condition.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddProgramPageRoutingModule,
    NgCalendarModule,
    ComponentModule
  ],
  declarations: [AddProgramPage ,
    AudioPlayerProgramComponent,ProgramNutritionDetailModalComponent,CalenderMonthWeekTimeComponent, TermsConditionComponent],
    entryComponents: [ProgramNutritionDetailModalComponent,CalenderMonthWeekTimeComponent, TermsConditionComponent]
})
export class AddProgramPageModule {}
