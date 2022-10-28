import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntibacterialsPage } from './antibacterials.page';

const routes: Routes = [
  {
    path: '',
    component: AntibacterialsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntibacterialsPageRoutingModule {}
