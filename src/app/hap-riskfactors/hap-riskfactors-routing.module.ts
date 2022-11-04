import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HapRiskfactorsPage } from './hap-riskfactors.page';

const routes: Routes = [
  {
    path: '',
    component: HapRiskfactorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HapRiskfactorsPageRoutingModule {}
