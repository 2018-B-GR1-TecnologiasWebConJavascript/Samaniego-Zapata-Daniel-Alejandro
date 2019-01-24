import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.scss']
})
export class RutaInicioComponent implements OnInit {

  imagenes: Imagenes[] = [
    {
      anio: 2018,
      nombreImagen: '01.jpg',
      nombrePelicula: 'Avengers',
    },
    {
      anio: 1996,
      nombreImagen: '02.jpg',
      nombrePelicula: 'DBZ',
    },
    {
      anio: 2008,
      nombreImagen: '03.jpg',
      nombrePelicula: 'Scooby and scapy doo',
    },
    {
      anio: 2011,
      nombreImagen: '04.jpg',
      nombrePelicula: 'Snoopy',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  agregarCarrito(pelicula){
    console.log('Agregando a carrito', pelicula);
  }

}

export interface Imagenes{

  nombreImagen: string;
  nombrePelicula: string;
  anio: number;

}
