import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HapAntibioticsPageRoutingModule } from './hap-antibiotics-routing.module';

import { HapAntibioticsPage } from './hap-antibiotics.page';
import { HapFilterPipe } from '../Pipes/hap-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HapAntibioticsPageRoutingModule
  ],
  declarations: [HapAntibioticsPage, HapFilterPipe]
})
export class HapAntibioticsPageModule {}
