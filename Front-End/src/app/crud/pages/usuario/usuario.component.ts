import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuarios } from '../../interfaces/usuarios.interfaces';
import { pipe, switchMap } from 'rxjs';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute,
    private crudService:CrudService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.crudService.getUsuarioId(id))
    )
    .subscribe(usuario=>this.usuario=usuario)
    
  }
  usuario: Usuarios = {
    usuario: '',
    contrasena: '',
    nombre: '',
    apellido: '',
    telefono: '',
    fecha_creacion:'',
    usuario_creacion:'',
    fecha_actualizacion:'',
    usuario_actualizacion:'',
    estado: ''
  }

  regresar(){

    this.router.navigateByUrl('/dashboard/listar')

  }
}
