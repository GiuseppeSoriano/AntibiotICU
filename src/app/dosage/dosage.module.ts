import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DosagePageRoutingModule } from './dosage-routing.module';

import { DosagePage } from './dosage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DosagePageRoutingModule
  ],
  declarations: [DosagePage]
})
export class DosagePageModule {}
