import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcuAntibioticsPageRoutingModule } from './icu-antibiotics-routing.module';

import { IcuAntibioticsPage } from './icu-antibiotics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcuAntibioticsPageRoutingModule
  ],
  declarations: [IcuAntibioticsPage]
})
export class IcuAntibioticsPageModule {}
