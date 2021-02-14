import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanalduvidasPageRoutingModule } from './canalduvidas-routing.module';

import { CanalduvidasPage } from './canalduvidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanalduvidasPageRoutingModule
  ],
  declarations: [CanalduvidasPage]
})
export class CanalduvidasPageModule {}
