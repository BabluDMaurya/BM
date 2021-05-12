import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// import {ComponentModule} from '../components.modules';
import { ChatListPageRoutingModule } from './chat-list-routing.module';
import { ChatListPage } from './chat-list.page';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // ComponentModule,
    ChatListPageRoutingModule,
    LazyLoadImageModule,
    Ng2SearchPipeModule
  ],
  declarations: [ChatListPage]
})
export class ChatListPageModule {}
