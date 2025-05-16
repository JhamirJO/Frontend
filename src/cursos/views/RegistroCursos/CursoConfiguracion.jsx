// src/views/CursoConfiguracion.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCursos } from "../../actions/cursoThunks.js";
import { ConfiguracionFormulario } from "./components/configuracionFormulario.jsx";

export const CursoConfiguracion = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { cursos, estaCargandoCursos } = useSelector((state) => state.curso);
    const [cursoData, setCursoData] = useState(null);

    useEffect(() => {
        if (cursos.length === 0) {
            dispatch(getCursos());
        }
    }, [dispatch, cursos]);

    useEffect(() => {
        const curso = cursos.find((curso) => curso.id === parseInt(id));
        if (curso) {
            setCursoData(curso);
        }
    }, [cursos, id]);

    if (estaCargandoCursos) return <p>Cargando...</p>;
    if (!cursoData) return <p>Curso no encontrado.</p>;

    // Manejar los cambios en el formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCursoData({
            ...cursoData,
            [name]: value
        });
    };

    return (
        <div className="cursos-registrados-section">
            <h2>Configuración del Curso</h2>
            <ConfiguracionFormulario cursoData={cursoData} handleChange={handleChange} />
        </div>
    );
};
