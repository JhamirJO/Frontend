
import { createAsyncThunk } from '@reduxjs/toolkit';

// Configuración de URL del backend usando variables de entorno de Vite
const urlBack = import.meta.env.VITE_APP_BACKEND_URL;
const apiPlanEstudios = import.meta.env.VITE_APP_API_CURSOS;

// Thunk para obtener planes de estudio activos
export const fetchPlanEstudiosActivos = createAsyncThunk(
  "planEstudio/fetchPlanEstudios",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${ urlBack + apiPlanEstudios }/plan-estudios/activos`);
      
      // Verificamos si la respuesta fue exitosa
      if (!response.ok) {
        throw new Error("Error al obtener los planes de estudio");
      }
      const data = await response.json();
      //console.log(data);
      return data;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
