import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DataUsuarios, Usuarios } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = environment.apiUrl;

  constructor( private http: HttpClient ) { }

  getUsuarios(): Observable<DataUsuarios[]> {
    return this.http.get<Usuarios>(`${ this.apiUrl }/users`)
              .pipe(
                map( res => res.data )
              )
  }

}
