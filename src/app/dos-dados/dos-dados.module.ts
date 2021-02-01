import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DosDadosPageRoutingModule } from './dos-dados-routing.module';

import { DosDadosPage } from './dos-dados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DosDadosPageRoutingModule
  ],
  declarations: [DosDadosPage]
})
export class DosDadosPageModule {}
