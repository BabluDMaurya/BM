import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { FixedFooterComponent } from '../fixed-footer/fixed-footer.component';
import { ProgramsComponent } from './programs/programs.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    Ng2SearchPipeModule
  ],
  entryComponents:[ProgramsComponent],
  declarations: [SearchPage,FixedFooterComponent,ProgramsComponent]
})
export class SearchPageModule {}
