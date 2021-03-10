import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetodosPageRoutingModule } from './metodos-routing.module';

import { MetodosPage } from './metodos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetodosPageRoutingModule
  ],
  declarations: [MetodosPage]
})
export class MetodosPageModule {}
