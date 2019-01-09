//raza-rest.service

//Decorador
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
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
      );

    return razas$;

  }


}


// epn.edu.ec -> 19.170.1.2

// CORS -> Navegador  ... implementa el navegador por eso es bueno que los usuarios utilicen un navegador confiable no cualquier cosita que encuentren

// epn.edu.ec -> HTTP fbi.gov.us
// BLOQUEO

// fbi.gov.us -> 19.220.1.5

// CORS -> Navegador

