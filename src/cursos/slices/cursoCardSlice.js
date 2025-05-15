
import { createSlice } from '@reduxjs/toolkit';

// Estado inicial del slice
const initialState = {
    cursosCard: [],
    isLoading: false,
    error: null
};

// Definición del slice
const cursoCardSlice = createSlice({
    name: 'cursoCard',
    initialState,
    reducers: {
        iniciaCargaCursoCard: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        cargaCursoCard: (state, action) => {
            state.isLoading = false;
            state.cursosCard = action.payload.cursos;
        },
        cargaCursoCardError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

// Exportando las acciones y el reducer
export const { iniciaCargaCursoCard, cargaCursoCard, cargaCursoCardError } = cursoCardSlice.actions;
export default cursoCardSlice.reducer;
