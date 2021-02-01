import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnDadoPage } from './un-dado.page';

const routes: Routes = [
  {
    path: '',
    component: UnDadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnDadoPageRoutingModule {}
