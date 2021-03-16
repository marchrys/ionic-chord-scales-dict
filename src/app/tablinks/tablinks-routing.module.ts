import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
      {
        path: 'dictionnaire-d-accords',
        loadChildren: () => import('../chorddict/chorddict.module').then(m => m.ChorddictPageModule)
      },
      {
        path: 'dictionnaire-de-gammes',
        loadChildren: () => import('../scaledict/scaledict.module').then(m => m.ScaledictPageModule)
      },
      {
        path: '',
        redirectTo: '/tablinks/dictionnaire-d-accords',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tablinks/dictionnaire-d-accords',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule { }