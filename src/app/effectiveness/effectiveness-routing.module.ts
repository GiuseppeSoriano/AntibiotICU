import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EffectivenessPage } from './effectiveness.page';

const routes: Routes = [
  {
    path: '',
    component: EffectivenessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EffectivenessPageRoutingModule {}
