import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SponcerChatPageRoutingModule } from './sponcer-chat-routing.module';

import { SponcerChatPage } from './sponcer-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SponcerChatPageRoutingModule
  ],
  declarations: [SponcerChatPage]
})
export class SponcerChatPageModule {}
