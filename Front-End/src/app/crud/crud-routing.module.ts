import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';



const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    children:[
      {
        path:'listar',
        component:ListarComponent
      },
      {
        path:'agregar',
        component:AgregarComponent
      },
      {
        path:'editar/:id',
        component:AgregarComponent
      },
      
      {
        path:':id',
        component:UsuarioComponent
      },
      {
        path:'**',
        redirectTo:'listar'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class CrudRoutingModule { }
