import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChorddictPage } from './chorddict.page';

const routes: Routes = [
  {
    path: '',
    component: ChorddictPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChorddictPageRoutingModule {}
