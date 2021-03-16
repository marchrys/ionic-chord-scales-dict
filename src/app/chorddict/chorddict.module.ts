import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChorddictPageRoutingModule } from './chorddict-routing.module';

import { ChorddictPage } from './chorddict.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChorddictPageRoutingModule
  ],
  declarations: [ChorddictPage]
})
export class ChorddictPageModule {}
