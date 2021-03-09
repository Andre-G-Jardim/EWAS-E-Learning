import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalOneboardingPageRoutingModule } from './modal-oneboarding-routing.module';

import { ModalOneboardingPage } from './modal-oneboarding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalOneboardingPageRoutingModule
  ],
  declarations: [ModalOneboardingPage],
  exports: [ModalOneboardingPage]
})
export class ModalOneboardingPageModule {}
