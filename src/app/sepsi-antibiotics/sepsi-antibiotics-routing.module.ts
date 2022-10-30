import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SepsiAntibioticsPage } from './sepsi-antibiotics.page';

const routes: Routes = [
  {
    path: '',
    component: SepsiAntibioticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SepsiAntibioticsPageRoutingModule {}
