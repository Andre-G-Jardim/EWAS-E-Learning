import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetodosConteudoPageRoutingModule } from './metodos-conteudo-routing.module';

import { MetodosConteudoPage } from './metodos-conteudo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetodosConteudoPageRoutingModule
  ],
  declarations: [MetodosConteudoPage]
})
export class MetodosConteudoPageModule {}
