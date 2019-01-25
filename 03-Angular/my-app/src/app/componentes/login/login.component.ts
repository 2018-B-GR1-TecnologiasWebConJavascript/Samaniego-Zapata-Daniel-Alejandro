import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = {
    username: '',
    password: ''
  };

  constructor(private readonly _authService: AuthService) {
  }

  ngOnInit() {
  }

  login(){

    const respuestaLogin$ = this._authService
      .login(
        this.usuario.username,
        this.usuario.password
      );

    respuestaLogin$
      .subscribe(
      (raza)=>{
        console.log(raza);
      },
      (error)=>{
        console.error(error);
      }
    );
  }
}
