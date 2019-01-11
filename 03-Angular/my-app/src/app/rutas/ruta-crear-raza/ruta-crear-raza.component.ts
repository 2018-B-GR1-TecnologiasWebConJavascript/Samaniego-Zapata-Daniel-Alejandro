import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-crear-raza',
  templateUrl: './ruta-crear-raza.component.html',
  styleUrls: ['./ruta-crear-raza.component.scss']
})
export class RutaCrearRazaComponent implements OnInit {

  nombre: string = 'Daniel';

  apellido: string ='';

  constructor() { }

  ngOnInit() {
  }

}
