import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoPreviewPage } from './video-preview.page';

const routes: Routes = [
  {
    path: '',
    component: VideoPreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoPreviewPageRoutingModule {}