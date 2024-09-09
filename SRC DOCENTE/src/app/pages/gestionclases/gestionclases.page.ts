import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-gestionclases',
  templateUrl: './gestionclases.page.html',
  styleUrls: ['./gestionclases.page.scss'],
})
export class GestionclasesPage implements OnInit {
  
  constructor(private router:Router, private alertcontroller:AlertController) { }

  ngOnInit() {
  }
  async goqr(){
    const alert = await this.alertcontroller.create({
      message:'COMING SOON',
      mode: 'ios',
      cssClass:'alertheader',
    });
    await alert.present();
  }
  seccion = [
    {
      id: 1,
      name: '004-D',
    },
    {
      id: 2,
      name: '006-D',
    },
    {
      id: 3,
      name: '009-D',
    },
  ];
  salas = [
    {
      id: 1,
      name: '202',
    },
    {
      id: 2,
      name: '209',
    },
    {
      id: 3,
      name: '208',
    },
  ];
  


}
