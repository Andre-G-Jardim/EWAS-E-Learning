import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideosTemaPageRoutingModule } from './videos-tema-routing.module';

import { VideosTemaPage } from './videos-tema.page';
import { SafeUrlPipe } from './safe-url.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideosTemaPageRoutingModule
  ],
  declarations: [VideosTemaPage, SafeUrlPipe]
})
export class VideosTemaPageModule {}
