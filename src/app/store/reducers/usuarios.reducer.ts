import { createReducer, on } from '@ngrx/store';
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError } from '../actions';
import { DataUsuarios } from '../../models/usuario.model';

export interface UsuariosState {
  usuarios: DataUsuarios[],
  loaded: boolean,
  loading: boolean,
  error: any
};

const usuariosInitialState: UsuariosState = {
  usuarios: [],
  loaded: false,
  loading: false,
  error: null
};

export const usuariosReducer = createReducer(
  usuariosInitialState,
  on(
    cargarUsuarios,
    (state) => ({
      ...state,
      loading: true}),
  ),
  on(
    cargarUsuariosSuccess,
    (state, {usuarios}) => ({
      ...state,
      loading: false,
      loaded: true,
      usuarios: [...usuarios]})
  ),
  on(
    cargarUsuariosError,
    (state, {payload}) => ({
      ...state,
      loading: false,
      loaded: false,
      error: {
        url: payload.url,
        name: payload.name,
        message: payload.message
      } })
  )
);
