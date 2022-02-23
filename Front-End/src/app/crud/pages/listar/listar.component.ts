import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Usuarios } from '../../interfaces/usuarios.interfaces';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  usuarios:Usuarios[]=[]
  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.crudService.getUsuarios()
      .subscribe(usuarios=>this.usuarios=usuarios)
  }
  borrar(usuario:Usuarios){
    if(usuario.id=="1"){
      Swal.fire('No Puedes Borrar al Administrador')
    }
    else{
      Swal.fire({
        title:`¿Estas Seguro de Eliminar a ${usuario.nombre}?`,
        text: "Si aceptas no podras revertir tu decisión!",
        icon: 'warning',
        confirmButtonText: 'Si, Borrar!',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
      }).then((result) => {
        if (result.isConfirmed) {
          this.crudService.deleteUsuario(usuario.id!)
            .subscribe(
              res=>
              this.crudService.getUsuarios()
                .subscribe(usuarios=>this.usuarios=usuarios) 
            )
         
          Swal.fire(
            'Usuario Borrado!',
            'Exitosamente.',
            'success'
          )
        }
      })
      
    }
  }

}
