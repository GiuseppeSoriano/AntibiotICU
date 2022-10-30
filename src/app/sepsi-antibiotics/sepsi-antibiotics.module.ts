import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SepsiAntibioticsPageRoutingModule } from './sepsi-antibiotics-routing.module';

import { SepsiAntibioticsPage } from './sepsi-antibiotics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SepsiAntibioticsPageRoutingModule
  ],
  declarations: [SepsiAntibioticsPage]
})
export class SepsiAntibioticsPageModule {}
