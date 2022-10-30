import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SepsiFocusPage } from './sepsi-focus.page';

const routes: Routes = [
  {
    path: '',
    component: SepsiFocusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SepsiFocusPageRoutingModule {}
