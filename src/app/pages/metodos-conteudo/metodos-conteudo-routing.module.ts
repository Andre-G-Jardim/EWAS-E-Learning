import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetodosConteudoPage } from './metodos-conteudo.page';

const routes: Routes = [
  {
    path: '',
    component: MetodosConteudoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetodosConteudoPageRoutingModule {}
