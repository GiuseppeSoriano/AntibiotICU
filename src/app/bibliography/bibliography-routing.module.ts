import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibliographyPage } from './bibliography.page';

const routes: Routes = [
  {
    path: '',
    component: BibliographyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibliographyPageRoutingModule {}
