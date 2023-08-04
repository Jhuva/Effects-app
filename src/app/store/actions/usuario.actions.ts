import { createAction, props } from "@ngrx/store";
import { DataUsuarios } from '../../models/usuario.model';

export const cargarUsuario = createAction(
  '[Usuario] Cargar Usuario',
  props<{ id: string }>()
);

export const cargarUsuarioSuccess = createAction(
  '[Usuario] Cargar Usuario Success',
  props<{usuario: DataUsuarios}>()
);

export const cargarUsuarioError = createAction(
  '[Usuario] Cargar Usuario Error',
  props<{payload: any}>()
);
