import { Component } from '@angular/core';

interface Opciones{
  icon: string;
  name: string; 
  redirecTo: string; 
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  opciones: Opciones[]=[ 
    {
      icon:'happy-outline',
      name:'Perfil',
      redirecTo: '/perfil'
    },
    {
      icon:'qr-code-outline',
      name:'Gestión de Clases',
      redirecTo: '/gestionclases'
    },
    {
      icon:'document-attach-outline',
      name:'Justificaciones de Inasistencia',
      redirecTo: '/justificacion'
    },
    {
      icon:'enter-outline',
      name:'Cerrar Sesion',
      redirecTo: '/login'
    },
  ]
  constructor() {}
}
