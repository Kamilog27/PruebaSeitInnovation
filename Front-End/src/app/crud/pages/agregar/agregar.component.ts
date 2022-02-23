import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import Swal from 'sweetalert2';
import { Usuarios } from '../../interfaces/usuarios.interfaces';
import { CrudService } from '../../services/crud.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  fecha = new Date();
  fechaAct = this.fecha.toUTCString();


  constructor(private crudService: CrudService, private router: Router,
    private activatedRoute: ActivatedRoute) { }
  editar: boolean = false;
  usuario: Usuarios = {
    usuario: 'Usuario',
    contrasena: '',
    nombre: '',
    apellido: '',
    telefono: '',
    id_rol: '2',
    fecha_creacion: this.fechaAct,
    fecha_actualizacion: "",
    usuario_creacion: '',
    usuario_actualizacion: '',
    estado: 'A'
  }

  ngOnInit(): void {
    if (this.router.url.includes('editar')) {
      this.editar = true;
      this.activatedRoute.params
        .pipe(
          switchMap(({ id }) => this.crudService.getUsuarioId(id))
        )
        .subscribe(usuario => this.usuario = usuario)

    } else {
      this.editar = false;
    }

  }


  agregar() {
    if (this.usuario.nombre.trim().length === 0 && this.usuario.contrasena.trim().length === 0 && this.usuario.apellido.trim().length === 0 && this.usuario.telefono.trim().length === 0 && this.usuario.usuario_creacion.trim().length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Todos los campos son oligatorios.',
        text:"Por favor completa los campos para guardar al usuario"
      })
      return;
    }
    this.crudService.postUsuario(this.usuario)
      .subscribe(() =>
        this.router.navigateByUrl('/dashboard/listar')
      )
    Swal.fire({
      title: 'Usuario creado Exitosamente',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }

    })

    this.usuario = {
      usuario: '',
      contrasena: '',
      nombre: '',
      apellido: '',
      telefono: '',
      id_rol: '',
      fecha_creacion: '',
      fecha_actualizacion: '',
      usuario_creacion: '',
      usuario_actualizacion: '',
      estado: ''

    }
  }

  actualizar() {
    this.usuario.fecha_actualizacion = this.fechaAct
    this.crudService.putUsuario(this.usuario)
      .subscribe(() =>
        this.router.navigateByUrl('/dashboard/listar')
      )
    Swal.fire({
      title: 'Usuario Actualizado Exitosamente',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    this.usuario = {
      usuario: '',
      contrasena: '',
      nombre: '',
      apellido: '',
      telefono: '',
      id_rol: '',
      fecha_creacion: '',
      fecha_actualizacion: '',
      usuario_creacion: '',
      usuario_actualizacion: '',
      estado: ''
    }


  }
  regresar() {
    this.router.navigateByUrl('/dashboard/listar')
  }
}
