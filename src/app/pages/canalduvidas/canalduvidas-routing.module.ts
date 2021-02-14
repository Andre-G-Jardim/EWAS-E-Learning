import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanalduvidasPage } from './canalduvidas.page';

const routes: Routes = [
  {
    path: '',
    component: CanalduvidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanalduvidasPageRoutingModule {}
