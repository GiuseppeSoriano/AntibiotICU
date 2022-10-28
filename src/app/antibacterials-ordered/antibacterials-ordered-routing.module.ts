import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntibacterialsOrderedPage } from './antibacterials-ordered.page';

const routes: Routes = [
  {
    path: '',
    component: AntibacterialsOrderedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntibacterialsOrderedPageRoutingModule {}
