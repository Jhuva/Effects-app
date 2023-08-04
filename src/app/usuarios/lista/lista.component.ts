import { Component } from '@angular/core';
import { DataUsuarios } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import * as actions from "../../store/actions";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  usuarios: DataUsuarios[] = [];
  loading = false;
  error: any;

  constructor( private store: Store<AppState> ){ }

  ngOnInit(): void {
    this.store.dispatch(actions.cargarUsuarios());
    this.store.select('usuarios').subscribe(({usuarios, loading, error}) => {
      this.usuarios = usuarios;
      this.loading = loading;
      this.error = error;
    })
  }

}
