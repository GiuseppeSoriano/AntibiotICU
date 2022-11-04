import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HapAntibioticsPage } from './hap-antibiotics.page';

const routes: Routes = [
  {
    path: '',
    component: HapAntibioticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HapAntibioticsPageRoutingModule {}
