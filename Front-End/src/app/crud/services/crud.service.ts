import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../interfaces/usuarios.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  getUsuarios():Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>('http://localhost:3000/usuarios')
  }
  
  postUsuario(usuario:Usuarios):Observable<Usuarios>{
    return this.http.post<Usuarios>('http://localhost:3000/usuarios',usuario)
  }
  getUsuarioId(id:string){
    return this.http.get<Usuarios>(`http://localhost:3000/usuarios/${id}`)
  }

  putUsuario(usuario:Usuarios):Observable<Usuarios>{
    return this.http.put<Usuarios>(`http://localhost:3000/usuarios/${usuario.id}`,usuario)
  }
  deleteUsuario(id:string):Observable<{}>{
    return this.http.delete<{}>(`http://localhost:3000/usuarios/${id}`)
  }

  

}
