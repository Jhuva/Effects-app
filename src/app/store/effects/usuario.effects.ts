import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosAction from '../actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioEffects {

  constructor(private actions$: Actions,
              private usuarioService: UsuarioService) {}

  cargarUsuario$ = createEffect( () => this.actions$.pipe(
    ofType( usuariosAction.cargarUsuario ),
    exhaustMap( (action) => this.usuarioService.getUsuarioById(action.id)
        .pipe(
          map(usuario => usuariosAction.cargarUsuarioSuccess({ usuario })),
          catchError( error => of(usuariosAction.cargarUsuarioError({ payload: error })) )
        )
      )
  ) );

}
