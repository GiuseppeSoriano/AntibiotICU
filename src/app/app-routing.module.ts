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
  {
    path: 'sepsi-focus',
    loadChildren: () => import('./sepsi-focus/sepsi-focus.module').then( m => m.SepsiFocusPageModule)
  },
  {
    path: 'sepsi-riskfactor',
    loadChildren: () => import('./sepsi-riskfactor/sepsi-riskfactor.module').then( m => m.SepsiRiskfactorPageModule)
  },
  {
    path: 'sepsi-pneumonia-settings',
    loadChildren: () => import('./sepsi-pneumonia-settings/sepsi-pneumonia-settings.module').then( m => m.SepsiPneumoniaSettingsPageModule)
  },
  {
    path: 'sepsi-antibiotics',
    loadChildren: () => import('./sepsi-antibiotics/sepsi-antibiotics.module').then( m => m.SepsiAntibioticsPageModule)
  },
  {
    path: 'hap-riskfactors',
    loadChildren: () => import('./hap-riskfactors/hap-riskfactors.module').then( m => m.HapRiskfactorsPageModule)
  },
  {
    path: 'hap-antibiotics',
    loadChildren: () => import('./hap-antibiotics/hap-antibiotics.module').then( m => m.HapAntibioticsPageModule)
  },
  {
    path: 'bibliography',
    loadChildren: () => import('./bibliography/bibliography.module').then( m => m.BibliographyPageModule)
  },
  {
    path: 'effectiveness',
    loadChildren: () => import('./effectiveness/effectiveness.module').then( m => m.EffectivenessPageModule)
  },
  {
    path: 'bacterials-ordered',
    loadChildren: () => import('./bacterials-ordered/bacterials-ordered.module').then( m => m.BacterialsOrderedPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
