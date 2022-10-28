import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterobacteralesPageRoutingModule } from './enterobacterales-routing.module';

import { EnterobacteralesPage } from './enterobacterales.page';

import { FilterPipe } from '../Pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterobacteralesPageRoutingModule
  ],
  declarations: [EnterobacteralesPage, FilterPipe]
})
export class EnterobacteralesPageModule {}
