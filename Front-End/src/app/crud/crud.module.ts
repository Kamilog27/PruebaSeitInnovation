import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { CrudRoutingModule } from './crud-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgregarComponent,
    ListarComponent,
    HomeComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    FormsModule
  ]
})
export class CrudModule { }
