import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  constructor(private router: Router) { }

  iniciarSesion(){
    this.router.navigate(['/inicio'])
  }
  goregistro(){
    this.router.navigate(['/registro'])
  }

}
