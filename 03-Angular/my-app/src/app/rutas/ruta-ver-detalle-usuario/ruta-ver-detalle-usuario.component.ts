import { Component, OnInit } from '@angular/core';
import {UsuarioServiceService} from "../../servicios/usuario-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ruta-ver-detalle-usuario',
  templateUrl: './ruta-ver-detalle-usuario.component.html',
  styleUrls: ['./ruta-ver-detalle-usuario.component.scss']
})
export class RutaVerDetalleUsuarioComponent implements OnInit {

  constructor(
    private readonly _usuarioService: UsuarioServiceService,
    private readonly _route: ActivatedRoute,  // RouteModule sino tenemos esto no podemos utilizar el AvtivatedRoute

  ) { }

  ngOnInit() {
    const rutaActiva$ = this._route.params;
    //INICIO
    rutaActiva$.subscribe(    // ASYNC
        (parametros)=>{
          console.log(parametros);
          //  -> {idUsuario:"1"}   Todos los parametros del URL son del tipo STRING
          const usuarioEncontrado = this._usuarioService
            .buscarPorId(+parametros.idUsuario)
          // para convertir a un numero en javascript se pone
          // Number(parametros.idUsuario) ->   +parametros.idUsuario
          console.log(usuarioEncontrado);
        }
      );
    //FIN
  }

}
