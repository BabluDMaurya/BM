import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddVideoPageRoutingModule } from './add-video-routing.module';
import { AddVideoPage } from './add-video.page';
// import { AddVideoNextComponent } from './add-video-next/add-video-next.component';
// import { AddVideoCompleteComponent } from './add-video-complete/add-video-complete.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddVideoPageRoutingModule
  ],
  entryComponents: [AudioPlayerComponent],
  declarations: [AddVideoPage,AudioPlayerComponent],
})
export class AddVideoPageModule {}