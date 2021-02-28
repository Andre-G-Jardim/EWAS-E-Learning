import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificacaoPageRoutingModule } from './verificacao-routing.module';

import { VerificacaoPage } from './verificacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificacaoPageRoutingModule
  ],
  declarations: [VerificacaoPage]
})
export class VerificacaoPageModule {}
