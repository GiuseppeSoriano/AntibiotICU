import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntibioticsPageRoutingModule } from './antibiotics-routing.module';

import { AntibioticsPage } from './antibiotics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntibioticsPageRoutingModule
  ],
  declarations: [AntibioticsPage]
})
export class AntibioticsPageModule {}
