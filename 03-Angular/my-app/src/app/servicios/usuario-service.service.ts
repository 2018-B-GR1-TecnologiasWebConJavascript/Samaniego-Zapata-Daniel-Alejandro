import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  usuarios: Usuario[] = [
    {
      id: 1,
      nombre: 'daniel'
    },
    {
      id: 2,
      nombre: 'loco'
    },
  ];

  registroActual = 3;   //RECNUM -> Record Number

  constructor() {
  }

  crear(nuevoUsuario: Usuario): Usuario {
    nuevoUsuario.id = this.registroActual;
    this.usuarios.push(nuevoUsuario);
    this.registroActual++;

    return nuevoUsuario

  }

  eliminar(id: number) {
    const indiceUsuario = this.usuarios
      .findIndex(
        (usuario) => {
          return usuario.id === id;   //Devuelve el índice del usuario
        }
      );
    const usuarioBorrado = JSON.parse(    //Crear clones de JSON
      JSON.stringify(this.usuarios [indiceUsuario])
    );

    this.usuarios.splice(indiceUsuario, 1);

    return usuarioBorrado;

  }

  actualizar(id: number, usuarioActualizado: Usuario) {
    const indiceUsuario = this.usuarios
      .findIndex(
        (usuario) => {
          return usuario.id === id;   //Devuelve el índice del usuario
        }
      );
    this.usuarios[indiceUsuario] = usuarioActualizado;

    return usuarioActualizado;
  }

  buscarPorId(id: number) {
    return this.usuarios
      .find((usuario) => usuario.id === id);
  }

}


export interface Usuario {
  nombre?: string;
  id?: number;
}
