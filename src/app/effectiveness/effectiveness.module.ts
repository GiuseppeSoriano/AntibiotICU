import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EffectivenessPageRoutingModule } from './effectiveness-routing.module';

import { EffectivenessPage } from './effectiveness.page';

import { FilterPipe } from '../Pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EffectivenessPageRoutingModule
  ],
  declarations: [EffectivenessPage, FilterPipe]
})
export class EffectivenessPageModule {}
