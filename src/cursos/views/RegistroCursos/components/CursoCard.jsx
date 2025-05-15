import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCursoCard } from "../../../actions/cursoThunks.js";

const CursoCard = ({ curso }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { cursosCard, isLoading, error } = useSelector((state) => state.cursoCard);

    useEffect(() => {
        // Si los cursos no están cargados, los carga
        if (cursosCard.length === 0) {
            dispatch(getCursoCard());
        }
    }, [dispatch, cursosCard.length]);

    // Verifica si el curso existe y está completo
    const cursoCompleto = cursosCard.find((c) => c.id === curso.id) || curso;

    if (isLoading) {
        return <p>Cargando curso...</p>;
    }

    if (error) {
        return <p>Error al cargar el curso: {error}</p>;
    }

    if (!cursoCompleto) {
        return <p>Curso no encontrado.</p>;
    }

    const handleRedirect = () => {
        navigate(`/cursos/detalles/${cursoCompleto.id}`);
    };

    return (
        <div className="course-card">
            <h3>{cursoCompleto.nombre || "Nombre no disponible"}</h3>
            <p><strong>Escuela:</strong> <span>{cursoCompleto.departamentoNombre || "N/A"}</span></p>
            <p><strong>Periodo Académico:</strong> <span>{cursoCompleto.codigoPeriodo || "N/A"}</span></p>
            <p><strong>Sección:</strong> <span>{cursoCompleto.seccion || "N/A"}</span></p>
            <Button onClick={handleRedirect}>
                Ir al curso
            </Button>
        </div>
    );
};

export default CursoCard;
