import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HapRiskfactorsPageRoutingModule } from './hap-riskfactors-routing.module';

import { HapRiskfactorsPage } from './hap-riskfactors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HapRiskfactorsPageRoutingModule
  ],
  declarations: [HapRiskfactorsPage]
})
export class HapRiskfactorsPageModule {}
