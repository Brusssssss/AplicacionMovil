import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-justificacion',
  templateUrl: './justificacion.page.html',
  styleUrls: ['./justificacion.page.scss'],
})
export class JustificacionPage implements OnInit {

  constructor(private alertcontroller: AlertController) { }

  ngOnInit() {
  }

  async justificacion(){
    const alert = await this.alertcontroller.create({
      message:'Tengo medico a esa hora profesora, por correo le mandé el papel de la consulta',
      mode: 'ios',
      cssClass:'alertheader',
    });
    await alert.present();
  }
}
