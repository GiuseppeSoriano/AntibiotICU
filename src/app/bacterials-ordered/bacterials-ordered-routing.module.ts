import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BacterialsOrderedPage } from './bacterials-ordered.page';

const routes: Routes = [
  {
    path: '',
    component: BacterialsOrderedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BacterialsOrderedPageRoutingModule {}
