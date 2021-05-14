import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import {ChatRoomsComponent} from './chat-rooms/chat-rooms.component';

@NgModule({
    imports: [
      CommonModule,
      IonicModule,
      FormsModule,
      RouterModule
    ],
    declarations: [ChatRoomsComponent],
    exports: [ChatRoomsComponent],
    entryComponents: [],
  })
export class ComponentModule {}