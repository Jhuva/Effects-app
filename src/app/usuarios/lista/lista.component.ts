import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DataUsuarios } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  usuarios: DataUsuarios[] = [];

  constructor( private usuarioService: UsuarioService ){ }

  ngOnInit(): void {
    this.usuarioService.getUsuarios()
      .subscribe( data => {
        this.usuarios = data;
      } );

  }

}
