import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'gestionclases',
    loadChildren: () => import('./pages/gestionclases/gestionclases.module').then( m => m.GestionclasesPageModule)
  },
  {
    path: 'justificacion',
    loadChildren: () => import('./pages/justificacion/justificacion.module').then( m => m.JustificacionPageModule)
  },
  {
    path: 'registrodocente',
    loadChildren: () => import('./pages/registrodocente/registrodocente.module').then( m => m.RegistrodocentePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
