import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalOneboardingPage } from './modal-oneboarding.page';

const routes: Routes = [
  {
    path: '',
    component: ModalOneboardingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalOneboardingPageRoutingModule {}
