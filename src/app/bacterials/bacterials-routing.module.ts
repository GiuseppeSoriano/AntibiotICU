import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BacterialsPage } from './bacterials.page';

const routes: Routes = [
  {
    path: '',
    component: BacterialsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BacterialsPageRoutingModule {}
