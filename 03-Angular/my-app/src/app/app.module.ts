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

@NgModule({
  declarations: [   // Components
    AppComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaMenuComponent,
    RutaPerfilComponent,
    Ruta404Component,
    RutaGestionUsuariosComponent,
    RutaGestionProductosComponent
  ],
  imports: [  //Modulos
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],  //Servicios
  bootstrap: [AppComponent]   //Componente principal
})
export class AppModule { }

/*
Componente principal
<router-outlel></router-outlet>
Inicio
Login
Perfil
Menu
404 - Not found
  <router-outlel></router-outlet>
    -Gestion Usuarios
        -Crear Usuarios
        -Actualizar Usuarios
    -Gestion Pproductos
        -Crear Producto
        -Actualizar Producto

*/
