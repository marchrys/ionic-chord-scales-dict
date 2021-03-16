import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScaledictPage } from './scaledict.page';

const routes: Routes = [
  {
    path: '',
    component: ScaledictPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScaledictPageRoutingModule {}
