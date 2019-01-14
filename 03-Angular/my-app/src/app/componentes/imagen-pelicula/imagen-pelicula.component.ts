import {Component, Input, OnInit} from '@angular/core';

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

  @Input()
  anio: string;

  constructor() { }

  ngOnInit() {
  }

}
