import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosAction from '../actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosEffects {

  constructor(private actions$: Actions,
              private usuarioService: UsuarioService) {}

  cargarUsuarios$ = createEffect( () => this.actions$.pipe(
    ofType( usuariosAction.cargarUsuarios ),
    exhaustMap( () => this.usuarioService.getUsuarios()
        .pipe(
          map(usuarios => usuariosAction.cargarUsuariosSuccess({ usuarios })),
          catchError( error => of(usuariosAction.cargarUsuariosError({ payload: error })) )
        )
      )
  ) );

}
