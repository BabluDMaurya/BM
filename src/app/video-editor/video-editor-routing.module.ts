import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoEditorPage } from './video-editor.page';

const routes: Routes = [
  {
    path: '',
    component: VideoEditorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoEditorPageRoutingModule {}
