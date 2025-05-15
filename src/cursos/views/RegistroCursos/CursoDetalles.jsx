import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCursoCard } from "../../actions/cursoThunks.js";
import "./CursosRegistrados.css";
import { Button } from "@mui/material";

export const CursoDetalles = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { cursosCard, isLoading, error } = useSelector((state) => state.cursoCard);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (cursosCard.length === 0) {
            dispatch(getCursoCard());
        }
    }, [dispatch, cursosCard.length]);

    const curso = cursosCard.find((curso) => curso.id === parseInt(id));

    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!curso) return <p>Curso no encontrado.</p>;

    const handleRedirect = () => {
        navigate(`/cursos/${curso.id}/configuracion`);
    };
    
    return (
        <div className="cursos-registrados-section">
            <h2 className="title">{curso ? curso.nombre : "Cargando Curso..."}</h2>
            <div className="course-list">
                <div className="course-card">
                    <h3>Alumnos</h3>
                    <p>Alumnos inscritos: 32</p>
                    <p>Solicitudes por revisar: 5</p>
                    <Button variant="contained" color="primary">Ver Alumnos</Button>
                </div>
                <div className="course-card">
                    <h3>Grupos</h3>
                    <p>Número de grupos: 5</p>
                    <p>Alumnos sin grupo: 2</p>
                    <Button variant="contained" color="primary">Ver Grupos</Button>
                </div>
                <div className="course-card">
                    <h3>Registro de Notas</h3>
                    <p>Notas Registradas</p>
                    <p>Individuales: 8/14</p>
                    <p>Grupales: 4/7</p>
                    <Button variant="contained" color="primary">Ver Registro</Button>
                </div>
                <div className="course-card">
                    <h3>Sílabos</h3>
                    <p>Consulta y gestión de sílabos.</p>
                    <Button variant="contained" color="primary">Ver Sílabos</Button>
                </div>
                <div className="course-card">
                    <h3>Gráficas</h3>
                    <p>Visualización de desempeño.</p>
                    <Button variant="contained" color="primary">Ver Gráficas</Button>
                </div>
                <div className="course-card">
                    <h3>Configuración</h3>
                    <p>Ajustes del curso.</p>
                    <Button variant="contained" color="primary" 
                    onClick={handleRedirect}>
                    Ver Configuración</Button>
                </div>
            </div>
        </div>
    );
};
