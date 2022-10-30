import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SepsiRiskfactorPage } from './sepsi-riskfactor.page';

const routes: Routes = [
  {
    path: '',
    component: SepsiRiskfactorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SepsiRiskfactorPageRoutingModule {}
