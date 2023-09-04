import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  value='Clear me'
  usuario: string =""
  password: string =""

  constructor(private router: Router) { }

  ngOnInit() {
  }

  iniciarSesion(){
    
    console.log("usuario:" + this.usuario)
    console.log("password:" + this.password)

    let datosEnviar: NavigationExtras = {
        queryParams : {
          usuarioLogin: this.usuario
        }
    }

    this.router.navigate(['/home'], datosEnviar);
  }

}
