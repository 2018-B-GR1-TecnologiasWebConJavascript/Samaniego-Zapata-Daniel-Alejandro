import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaMenuComponent } from './rutas/ruta-menu/ruta-menu.component';
import { RutaPerfilComponent } from './rutas/ruta-perfil/ruta-perfil.component';
import { Ruta404Component } from './rutas/ruta404/ruta404.component';
import { RutaGestionUsuariosComponent } from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import { RutaGestionProductosComponent } from './rutas/ruta-gestion-productos/ruta-gestion-productos.component';
import { RutaCrearUsuariosComponent } from './rutas/ruta-crear-usuarios/ruta-crear-usuarios.component';
import { RutaActualizarUsuariosComponent } from './rutas/ruta-actualizar-usuarios/ruta-actualizar-usuarios.component';
import { RutaCrearProductoComponent } from './rutas/ruta-crear-producto/ruta-crear-producto.component';
import { RutaActualizarProductoComponent } from './rutas/ruta-actualizar-producto/ruta-actualizar-producto.component';
import {UsuarioServiceService} from "./servicios/usuario-service.service";
import { RutaVerDetalleUsuarioComponent } from './rutas/ruta-ver-detalle-usuario/ruta-ver-detalle-usuario.component';
import {HttpClientModule} from "@angular/common/http";
import {RazaRestService} from "./servicios/rest/raza-rest.service";
import { RutaCrearRazaComponent } from './rutas/ruta-crear-raza/ruta-crear-raza.component';
import {FormsModule} from "@angular/forms";
import { RutaActualizarRazaComponent } from './rutas/ruta-actualizar-raza/ruta-actualizar-raza.component';
import { ImagenPeliculaComponent } from './componentes/imagen-pelicula/imagen-pelicula.component';

@NgModule({
  declarations: [   // Components
    AppComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaMenuComponent,
    RutaPerfilComponent,
    Ruta404Component,
    RutaGestionUsuariosComponent,
    RutaGestionProductosComponent,
    RutaCrearUsuariosComponent,
    RutaActualizarUsuariosComponent,
    RutaCrearProductoComponent,
    RutaActualizarProductoComponent,
    RutaVerDetalleUsuarioComponent,
    RutaCrearRazaComponent,
    RutaActualizarRazaComponent,
    ImagenPeliculaComponent,
  ],
  imports: [  //Modulos
    BrowserModule,        // Sirve para dejarnos utilizar el Directivas, Event binding, interpolacion, property binding.
    AppRoutingModule,
    HttpClientModule,      // Acceso a un servicio HttpClient
    FormsModule

  ],
  providers: [
    UsuarioServiceService,
    RazaRestService
  ],  //Servicios
  bootstrap: [AppComponent]   //Componente principal
})
export class AppModule { }

/*
Componente principal
<router-outlel></router-outlet>     Para meter componentes dentro de otros componentes

Inicio
Login
Perfil
404 - Not found
Menu

  <router-outlel></router-outlet>
    -Gestion Usuarios
    /menu/gestion-usuarios

    <router-outlel></router-outlet>
        -Crear Usuarios         /menu/gestion-usuarios/crear-usuarios
        -Actualizar Usuarios    /menu/gestion-usuarios/actualizar-usuarios

    <router-outlel></router-outlet>
    -Gestion Productos
    /menu/gestion-productos

        -Crear Producto       /menu/gestion-productos/crear-producto
        -Actualizar Producto  /menu/gestion-productos/actualizar-producto

*/
