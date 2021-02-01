import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnDadoPageRoutingModule } from './un-dado-routing.module';

import { UnDadoPage } from './un-dado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnDadoPageRoutingModule
  ],
  declarations: [UnDadoPage]
})
export class UnDadoPageModule {}
