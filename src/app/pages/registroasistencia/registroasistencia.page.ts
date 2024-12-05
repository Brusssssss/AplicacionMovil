import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-registroasistencia',
  templateUrl: './registroasistencia.page.html',
  styleUrls: ['./registroasistencia.page.scss'],
})
export class RegistroasistenciaPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goqr(){
    this.router.navigate(['/qr'])
  }
}
