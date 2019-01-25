//raza-rest.service

//Decorador
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable, pipe} from "rxjs";
import {Raza} from "../../interfaces/raza";
import {map} from "rxjs/operators";

@Injectable()
export class RazaRestService {

  nombreModelo = '/Raza';

  constructor(private readonly _httpClient:HttpClient){

  }

  findAll(): Observable<Raza[]> {
    //OBSERVABLE
    const razas$ = this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(
        map(
          (respuesta) => {
            return <Raza[]> respuesta;
          }
        )
      );  // Castear

    return razas$;
  }

  delete(id: number): Observable<Raza> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <Raza> r)); // Castear
  }


  create(nombre: string,
         username: string,
         password: string): Observable<Raza> {

    const objetoAGuardar:Raza = {
      nombre: nombre
    };

    const url = environment.url + this.nombreModelo;

    return this._httpClient
      .post(url, objetoAGuardar)
      .pipe(map(r => <Raza> r)); // Castear

  }

  findOneById(id:number | string ): Observable<Raza>{
    const url = environment.url + this.nombreModelo
                + '/' + id;

    return this._httpClient
      .get(url)
      .pipe(map(r => <Raza> r)); // Castear

  }

  updateOneById(raza:Raza) {

    const url = environment.url + this.nombreModelo
      + '/' + raza.id;

    return this._httpClient
      .put(url, raza)
      .pipe(map(r => <Raza> r)); // Castear
  }

}


// epn.edu.ec -> 19.170.1.2

// CORS -> Navegador  ... implementa el navegador por eso es bueno que los usuarios utilicen un navegador confiable no cualquier cosita que encuentren

// epn.edu.ec -> HTTP fbi.gov.us
// BLOQUEO

// fbi.gov.us -> 19.220.1.5

// CORS -> Navegador

