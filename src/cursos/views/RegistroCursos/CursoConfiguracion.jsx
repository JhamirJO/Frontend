// src/views/CursoConfiguracion.jsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCursos } from "../../actions/cursoThunks.js";

export const CursoConfiguracion = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { cursos, estaCargandoCursos } = useSelector((state) => state.curso);

    useEffect(() => {
        // Verificar si los cursos están cargados
        if (cursos.length === 0) {
            dispatch(getCursos());
        }
    }, [dispatch, cursos]);

    // Buscar el curso específico
    const curso = cursos.find((curso) => curso.id === parseInt(id));

    if (estaCargandoCursos) return <p>Cargando...</p>;
    if (!curso) return <p>Curso no encontrado.</p>;

    return (
        <div>
            <h2>Configuración del Curso</h2>
            <p><strong>ID del Curso:</strong> {curso.id}</p>
            <p><strong>Nombre del Curso:</strong> {curso.nombre}</p>
        </div>
    );
};
