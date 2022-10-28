import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'antibacterials',
    loadChildren: () => import('./antibacterials/antibacterials.module').then( m => m.AntibacterialsPageModule)
  },
  {
    path: 'bacterials',
    loadChildren: () => import('./bacterials/bacterials.module').then( m => m.BacterialsPageModule)
  },
  {
    path: 'dosage',
    loadChildren: () => import('./dosage/dosage.module').then( m => m.DosagePageModule)
  },
  {
    path: 'antibacterials-ordered',
    loadChildren: () => import('./antibacterials-ordered/antibacterials-ordered.module').then( m => m.AntibacterialsOrderedPageModule)
  },
  {
    path: 'enterobacterales',
    loadChildren: () => import('./enterobacterales/enterobacterales.module').then( m => m.EnterobacteralesPageModule)
  },
  {
    path: 'antibiotics',
    loadChildren: () => import('./antibiotics/antibiotics.module').then( m => m.AntibioticsPageModule)
  },
  {
    path: 'icu-antibiotics',
    loadChildren: () => import('./icu-antibiotics/icu-antibiotics.module').then( m => m.IcuAntibioticsPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
