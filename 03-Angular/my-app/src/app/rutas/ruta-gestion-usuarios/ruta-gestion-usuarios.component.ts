import { Component, OnInit } from '@angular/core';
import {UsuarioServiceService} from "../../servicios/usuario-service.service";
import {RazaRestService} from "../../servicios/rest/raza-rest.service";
import {Raza} from "../../interfaces/raza";

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {

  usuarios = [];

  //  Inyeccion de dependencias
  constructor(
    private readonly _razaRestService: RazaRestService
  ) {

  }

  ngOnInit() {
    //Cuando esta listo el web component para mostrarse.
    const razas$ = this._razaRestService.findAll();

    razas$
      .subscribe(
        (razas: Raza[])=>{
          console.log(razas);
          this.usuarios = razas;
        },
        (error)=>{
          console.error('Error', error);
        }

      )

  }

  eliminar(raza: Raza){

    const razaEliminada$ = this._razaRestService.delete(raza.id);

    razaEliminada$
    .subscribe(
      (razaEliminada: Raza)=>{
        console.log('Se elimino:', razaEliminada);

        const indice = this.usuarios
          .findIndex((r) => r.id === raza.id);

        this.usuarios.splice(indice,1);

      },
      (error)=>{
        console.error('Error', error);
      }
    );

  }
}


