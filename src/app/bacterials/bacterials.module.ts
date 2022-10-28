import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BacterialsPageRoutingModule } from './bacterials-routing.module';

import { BacterialsPage } from './bacterials.page';

import { FilterPipe } from '../Pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BacterialsPageRoutingModule
  ],
  declarations: [BacterialsPage, FilterPipe]
})
export class BacterialsPageModule {}
