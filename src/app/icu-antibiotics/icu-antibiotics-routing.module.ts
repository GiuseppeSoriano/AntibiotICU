import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcuAntibioticsPage } from './icu-antibiotics.page';

const routes: Routes = [
  {
    path: '',
    component: IcuAntibioticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcuAntibioticsPageRoutingModule {}
