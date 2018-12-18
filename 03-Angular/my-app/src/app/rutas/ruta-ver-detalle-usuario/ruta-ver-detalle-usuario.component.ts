import { Component, OnInit } from '@angular/core';
import {UsuarioServiceService} from "../../servicios/usuario-service.service";
import {ActivatedRoute} from "@angular/router";
import {UsuarioInterface} from '../../servicios/usuario-service.service'

@Component({
  selector: 'app-ruta-ver-detalle-usuario',
  templateUrl: './ruta-ver-detalle-usuario.component.html',
  styleUrls: ['./ruta-ver-detalle-usuario.component.scss']
})
export class RutaVerDetalleUsuarioComponent implements OnInit {

  usuario: UsuarioInterface;


  constructor(
    private readonly _usuarioService: UsuarioServiceService,
    private readonly _route: ActivatedRoute,  // RouteModule sino tenemos esto no podemos utilizar el AvtivatedRoute

  ) { }

  ngOnInit() {
    const rutaActiva$ = this._route.params;
    //INICIO
    rutaActiva$.subscribe(    // ASYNC
        (parametros)=>{
          // parametros -> {idUsuario:"1"}   Todos los parametros del URL son del tipo STRING
          const usuarioEncontrado = this._usuarioService
            .buscarPorId(+parametros.idUsuario)
          // para convertir a un numero en javascript se pone
          // Number(parametros.idUsuario) ->   +parametros.idUsuario
          this.usuario = usuarioEncontrado;

        }
      );
    //FIN
  }

}
