import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntibacterialsOrderedPageRoutingModule } from './antibacterials-ordered-routing.module';

import { AntibacterialsOrderedPage } from './antibacterials-ordered.page';

import { FilterPipe } from '../Pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntibacterialsOrderedPageRoutingModule
  ],
  declarations: [AntibacterialsOrderedPage, FilterPipe]
})
export class AntibacterialsOrderedPageModule {}
