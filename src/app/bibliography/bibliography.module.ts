import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliographyPageRoutingModule } from './bibliography-routing.module';

import { BibliographyPage } from './bibliography.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliographyPageRoutingModule
  ],
  declarations: [BibliographyPage]
})
export class BibliographyPageModule {}
