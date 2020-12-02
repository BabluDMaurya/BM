import { NgModule }  from '@angular/core';
import { FilterPipe } from './../config/filter.pipe';
import { InArrayPipe } from './../config/inarray.pipe';

import { ProgramFilterPipe } from './../config/program-filter.pipe';

@NgModule({
    imports:        [],
    declarations:   [FilterPipe,InArrayPipe,ProgramFilterPipe],
    exports:        [FilterPipe,InArrayPipe,ProgramFilterPipe],
})

export class PipeModule {

  static forRoot() {
     return {
         ngModule: PipeModule,
         providers: [],
     };
  }
} 