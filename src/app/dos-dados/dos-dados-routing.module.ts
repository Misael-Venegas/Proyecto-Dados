import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DosDadosPage } from './dos-dados.page';

const routes: Routes = [
  {
    path: '',
    component: DosDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DosDadosPageRoutingModule {}
