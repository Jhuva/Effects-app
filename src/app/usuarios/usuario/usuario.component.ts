import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import { cargarUsuario } from 'src/app/store/actions';
import { DataUsuarios } from '../../models/detUsuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  usuario!: DataUsuarios | null;
  loading = false;
  error: any;

  constructor( private router: ActivatedRoute,
               private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.router.params.subscribe(({ id }) => {
      this.store.dispatch(cargarUsuario({ id }))
    });

    this.store.select('usuario').subscribe( ({ usuario, loading, error }) => {
      this.usuario = usuario;
      this.loading = loading;
      this.error = error;
    })
  }

}
