import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {

  //  Inyeccion de dependencias
  constructor() { }

  ngOnInit() {
  }

  hola() {
    return 'Hola';
  }
  imprimir(usuario: Usuario){
    console.log('Imprimir', usuario);
    const indiceUsuarioEliminar = this.usuarios
      .findIndex((usuarioABuscar)=>{
        return usuarioABuscar.id == usuario.id
      });
    this.usuarios.splice(indiceUsuarioEliminar, 1);

  }
}


