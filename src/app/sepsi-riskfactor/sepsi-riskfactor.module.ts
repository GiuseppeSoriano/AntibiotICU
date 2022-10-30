import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SepsiRiskfactorPageRoutingModule } from './sepsi-riskfactor-routing.module';

import { SepsiRiskfactorPage } from './sepsi-riskfactor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SepsiRiskfactorPageRoutingModule
  ],
  declarations: [SepsiRiskfactorPage]
})
export class SepsiRiskfactorPageModule {}
