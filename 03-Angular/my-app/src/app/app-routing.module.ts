import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaMenuComponent} from "./rutas/ruta-menu/ruta-menu.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaPerfilComponent} from "./rutas/ruta-perfil/ruta-perfil.component";
import {Ruta404Component} from "./rutas/ruta404/ruta404.component";
import {RutaGestionUsuariosComponent} from "./rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component";
import {RutaGestionProductosComponent} from "./rutas/ruta-gestion-productos/ruta-gestion-productos.component";
import {RutaCrearUsuariosComponent} from "./rutas/ruta-crear-usuarios/ruta-crear-usuarios.component";
import {RutaActualizarUsuariosComponent} from "./rutas/ruta-actualizar-usuarios/ruta-actualizar-usuarios.component";
import {RutaCrearProductoComponent} from "./rutas/ruta-crear-producto/ruta-crear-producto.component";
import {RutaActualizarProductoComponent} from "./rutas/ruta-actualizar-producto/ruta-actualizar-producto.component";
import {RutaVerDetalleUsuarioComponent} from "./rutas/ruta-ver-detalle-usuario/ruta-ver-detalle-usuario.component";
import {RutaCrearRazaComponent} from "./rutas/ruta-crear-raza/ruta-crear-raza.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    //Nombre
    path: 'inicio',
    //Componente
    component: RutaInicioComponent
  },
  {
    path: 'menu',
    component: RutaMenuComponent,
    children: [
      {      // Para que se vaya directo a gestion productos
        path: '',
        pathMatch: 'full',
        redirectTo: 'gestion-productos'
      },
      {
        //   menu/gestion-usuarios
        path: 'gestion-usuarios',
        component: RutaGestionUsuariosComponent,
        children: [
          {
            path: 'crear-usuarios',
            component: RutaCrearUsuariosComponent
          },
          {
            path: 'actualizar-usuarios',
            component: RutaActualizarUsuariosComponent
          }
        ]
      },

      {
        //   menu/crear-raza
        path: 'crear-raza',
        component: RutaCrearRazaComponent,
      },

      {
        //   menu/gestion-productos
        path: 'gestion-productos',
        component: RutaGestionProductosComponent,
        children: [
          {
            path: 'crear-producto',
            component: RutaCrearProductoComponent
          },
          {
            path: 'actualizar-producto',
            component: RutaActualizarProductoComponent
          }
        ]
      },
      {
        // /menu/ver-usuario
        path: 'ver-usuario/:idUsuario',
        component: RutaVerDetalleUsuarioComponent
      }
    ]
  },
  {
    path: 'login',
    component: RutaLoginComponent
  },
  {
    path: 'perfil',
    component: RutaPerfilComponent
  },
  {
    path: 'no-encontrado',
    component: Ruta404Component
  },
  {
    path: '**',
    redirectTo: 'no-encontrado'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  //Nos permite movernos entre rutas, sacar parametros
  exports: [RouterModule]
})
export class AppRoutingModule {
}
