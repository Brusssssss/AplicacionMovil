import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  async enviar(){
    const alert = await this.alertcontroller.create({
      header: 'Justificación enviada correctamente!!',
      mode: 'ios',
      cssClass:'alertHeader',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Justificación enviada correctamente!!');
          },
        },
      ],
    });

    await alert.present();
    
  }
}
