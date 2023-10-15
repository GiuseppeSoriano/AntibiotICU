import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BacterialsOrderedPageRoutingModule } from './bacterials-ordered-routing.module';

import { BacterialsOrderedPage } from './bacterials-ordered.page';
import { FilterPipe } from '../Pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BacterialsOrderedPageRoutingModule
  ],
  declarations: [BacterialsOrderedPage, FilterPipe]
})
export class BacterialsOrderedPageModule {}
