import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../../seguridad/slices';
import { cursoSlice, planEstudioSlice } from '../../cursos/slices';
import cursoCardReducer from '../../cursos/slices/cursoCardSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    curso: cursoSlice.reducer,
    planEstudios: planEstudioSlice,
    cursoCard: cursoCardReducer,
  },
});
