import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulario-raza',
  templateUrl: './formulario-raza.component.html',
  styleUrls: ['./formulario-raza.component.scss']
})
export class FormularioRazaComponent implements OnInit {

  @Input()
  nombre: string;

  @Input()
  nombreBoton: string;

  @Output()
  formularioValido = new EventEmitter();

  nombreRaza: string;

  constructor() { }

  ngOnInit() {
    this.nombreRaza = this.nombre;
  }

  emitirFormularioValido(){
    const objetoRaza = {
      nombre:this.nombreRaza
    }
    this.formularioValido.emit(objetoRaza);
  }

}
