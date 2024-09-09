import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage  {

  constructor(private router: Router, private menu: MenuController) { }

  gologin(){
    this.router.navigate(['/login'])
  }
  goregistrodocente(){
    this.router.navigate(['/registrodocente'])
  }
  mostrarMenu(){
    this.menu.open('first')
  }

}
