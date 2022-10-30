import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SepsiPneumoniaSettingsPageRoutingModule } from './sepsi-pneumonia-settings-routing.module';

import { SepsiPneumoniaSettingsPage } from './sepsi-pneumonia-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SepsiPneumoniaSettingsPageRoutingModule
  ],
  declarations: [SepsiPneumoniaSettingsPage]
})
export class SepsiPneumoniaSettingsPageModule {}
