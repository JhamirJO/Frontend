
import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import CursoCard from "./CursoCard";

// Filtro de Departamento
export const FiltroDepartamento = ({ departamentos, onDepartamentoChange }) => {
    return (
        <Autocomplete
            options={departamentos}
            getOptionLabel={(option) => option.codigo || ""}
            onChange={(event, newValue) => onDepartamentoChange(newValue)}
            renderInput={(params) => (
                <TextField {...params} label="Departamento" className="custom-autocomplete" />
            )}
        />
    );
};

// Barra de Búsqueda
export const BarraBusqueda = ({ searchTerm, onSearchChange }) => {
    return (
        <input 
            type="text" 
            className="barra-busqueda"
            name="buscador-cursos" 
            placeholder="Buscar cursos..." 
            value={searchTerm} 
            onChange={(e) => onSearchChange(e.target.value)} 
        />
    );
};

// Vista de Cursos (Lista o Cuadrícula)
export const VistaCursos = ({ isGridView, onToggleView }) => {
    return (
        <button className="toggle-view" onClick={onToggleView}>
            {isGridView ? "Vista Lista" : "Vista Cuadrícula"}
        </button>
    );
};

// Lista de Cursos
export const ListaCursos = ({ cursos, isGridView }) => {
    return (
        <div className={`course-list ${isGridView ? 'grid-view' : 'list-view'}`}>
            {cursos.length > 0 ? (
                cursos.map((curso, index) => (
                    <CursoCard key={index} curso={curso} />
                ))
            ) : (
                <p>No hay cursos disponibles.</p>
            )}
        </div>
    );
};
