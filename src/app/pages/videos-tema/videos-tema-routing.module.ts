import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideosTemaPage } from './videos-tema.page';

const routes: Routes = [
  {
    path: '',
    component: VideosTemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideosTemaPageRoutingModule {}
