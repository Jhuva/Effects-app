import { createReducer, on } from '@ngrx/store';
import { cargarUsuario, cargarUsuarioError, cargarUsuarioSuccess } from '../actions';
import { DataUsuarios } from '../../models/usuario.model';

export interface UsuarioState {
  id: string | null,
  usuario: DataUsuarios | null,
  loaded: boolean,
  loading: boolean,
  error: any
};

const usuarioInitialState: UsuarioState = {
  id: null,
  usuario: null,
  loaded: false,
  loading: false,
  error: null
};

export const usuarioReducer = createReducer(
  usuarioInitialState,
  on(
    cargarUsuario,
    (state, { id }) => ({
      ...state,
      loading: true,
      id: id
    }),
  ),
  on(
    cargarUsuarioSuccess,
    (state, {usuario}) => ({
      ...state,
      loading: false,
      loaded: true,
      usuario: {...usuario}})
  ),
  on(
    cargarUsuarioError,
    (state, {payload}) => ({
      ...state,
      loading: false,
      loaded: false,
      usuario: null,
      error: {
        url: payload.url,
        name: payload.name,
        message: payload.message
      } })
  )
);
