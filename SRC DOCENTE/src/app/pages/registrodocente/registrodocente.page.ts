import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-registrodocente',
  templateUrl: './registrodocente.page.html',
  styleUrls: ['./registrodocente.page.scss'],
})
export class RegistrodocentePage implements OnInit {
  nom:string="";
  constructor(private router:Router, private alertcontroller:AlertController) { }

  ngOnInit() {
  }

  async goinicio(){
    const alert = await this.alertcontroller.create({
      message:'Cuenta creada exitosamente!' + this.nom,
      mode: 'ios',
      cssClass:'alertHeader',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Alerta confirmada');
            this.router.navigate(['/inicio']);
          },
        },
      ],
    });

    await alert.present();
    
  }
}
