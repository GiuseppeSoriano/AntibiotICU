import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntibioticsPage } from './antibiotics.page';

const routes: Routes = [
  {
    path: '',
    component: AntibioticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntibioticsPageRoutingModule {}
