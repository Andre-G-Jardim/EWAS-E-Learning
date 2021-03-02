import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificacaoPage } from './verificacao.page';

const routes: Routes = [
  {
    path: '',
    component: VerificacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificacaoPageRoutingModule {}
