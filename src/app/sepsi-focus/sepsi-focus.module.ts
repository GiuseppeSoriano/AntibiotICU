import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SepsiFocusPageRoutingModule } from './sepsi-focus-routing.module';

import { SepsiFocusPage } from './sepsi-focus.page';
import { FilterPipe } from '../Pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SepsiFocusPageRoutingModule
  ],
  declarations: [SepsiFocusPage, FilterPipe]
})
export class SepsiFocusPageModule {}
