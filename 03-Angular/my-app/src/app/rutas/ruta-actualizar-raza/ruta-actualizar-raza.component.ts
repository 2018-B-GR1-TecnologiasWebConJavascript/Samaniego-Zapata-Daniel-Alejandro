import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RazaRestService} from '../../servicios/rest/raza-rest.service';
import {Raza} from '../../interfaces/raza';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-ruta-actualizar-raza',
  templateUrl: './ruta-actualizar-raza.component.html',
  styleUrls: ['./ruta-actualizar-raza.component.scss']
})
export class RutaActualizarRazaComponent implements OnInit {

  razaAActualizar: Raza; //undefined

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _razaRestService: RazaRestService,
    private readonly _router: Router
  ) {
  }

  // Se ejecuta cuando empieza el componente

  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;

    rutaActiva$
      .subscribe(
        (parametros: ParametrosRutaActualizarRaza) => {
          console.log(parametros["razaId"],'asdfg')
          const raza$ = this._razaRestService
            .findOneById(parametros.razaId);
          console.log(raza$,'asdfg')
          raza$
            .subscribe(
              (raza: Raza) => {
                console.log(raza,'asdfg')
                this.razaAActualizar = raza;
              },
              (error) => {
                console.error('Error: ', error);
              }
            );

        }
      );

  }

  buscarRaza(idRaza) {
    const raza$ = this._razaRestService
      .findOneById(idRaza);

    raza$
      .subscribe(
        (raza: Raza) => {
          console.log(raza);
        },
        (error) => {
          console.error('Error: ', error);
        }
      );
  }

  actualizarRaza(formulario: NgForm) {

    const razaActualizada$ = this._razaRestService
      .updateOneById(this.razaAActualizar);

    razaActualizada$
      .subscribe(
        (razaActualizada: Raza) => {

          const url = [
            '/menu',
            'gestion-usuarios'
          ];

          alert('Raza actualizada ' + razaActualizada.nombre);

          this._router.navigate(url);
        },
        (error) => {
          console.error('Error', error);
        }
      );
  }
}

interface ParametrosRutaActualizarRaza {
  razaId: string;
}


