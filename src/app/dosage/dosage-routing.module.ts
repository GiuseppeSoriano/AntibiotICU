import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DosagePage } from './dosage.page';

const routes: Routes = [
  {
    path: '',
    component: DosagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DosagePageRoutingModule {}
