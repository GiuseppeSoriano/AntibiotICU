import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntibacterialsPageRoutingModule } from './antibacterials-routing.module';

import { AntibacterialsPage } from './antibacterials.page';
import { FilterPipe } from '../Pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntibacterialsPageRoutingModule
  ],
  declarations: [AntibacterialsPage, FilterPipe]
})
export class AntibacterialsPageModule {}
