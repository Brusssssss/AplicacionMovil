import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionclasesPageRoutingModule } from './gestionclases-routing.module';

import { GestionclasesPage } from './gestionclases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionclasesPageRoutingModule
  ],
  declarations: [GestionclasesPage]
})
export class GestionclasesPageModule {}
