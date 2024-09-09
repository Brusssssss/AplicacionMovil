import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionclasesPage } from './gestionclases.page';

const routes: Routes = [
  {
    path: '',
    component: GestionclasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionclasesPageRoutingModule {}
