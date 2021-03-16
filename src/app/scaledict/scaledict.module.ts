import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScaledictPageRoutingModule } from './scaledict-routing.module';

import { ScaledictPage } from './scaledict.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScaledictPageRoutingModule
  ],
  declarations: [ScaledictPage]
})
export class ScaledictPageModule {}
