import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-imagen-pelicula',
  templateUrl: './imagen-pelicula.component.html',
  styleUrls: ['./imagen-pelicula.component.scss']
})
export class ImagenPeliculaComponent implements OnInit {

  @Input()
  nombre: string;

  @Input()
  titulo: string;

  @Input() // Propiedades
  anio: string;

  @Output() // Eventos
  dioClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  lanzarEventoDioClick(){
    const objetoPelicula ={
      titulo: this.titulo,
      anio: this.anio,
      nombre: this.nombre
    };

    this.dioClick.emit(objetoPelicula);

  }

}
