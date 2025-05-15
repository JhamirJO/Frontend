import React, { useState, useEffect } from "react";
import "./CursosRegistrados.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlanEstudiosActivos } from "../../actions/planestudioThunks.js";
import { createCurso, getCursos } from "../../actions/cursoThunks.js";

import CursoFormulario from "./components/CursoFormulario";
import CursoCard from "./components/CursoCard";

export const CursosRegistrados = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const { data: planes = [] } = useSelector((state) => state.planEstudios);
    const { cursos } = useSelector(state => state.curso);

    useEffect(() => {
        dispatch(fetchPlanEstudiosActivos());
        dispatch(getCursos());
    }, [dispatch]);

    const togglePopup = () => setShowPopup(!showPopup);

    const confirmSaveCourse = (cursoData) => {
        const newCourse = { ...cursoData, 
            tipo: "obligatorio", 
            numHorasTeoria: 3, 
            numHorasPractica: 2, 
            numHorasLaboratorio: 1, 
            numCreditos: 4, 
            ciclo: "VII", 
            periodoAcademicoId: 1, 
            institucionid: 1, 
            departamentoid: 2, 
            estado: '1', 
            sumilla: "Curso de aprendizaje práctico.", 
            modalidad: "presencial", 
            etiquetas: "software, diseño, análisis" 
        };

        dispatch(createCurso(newCourse)).then(() => {
            dispatch(getCursos());
            setShowPopup(false);
        }).catch((error) => {
            console.error("Error al guardar el curso:", error);
            alert("Ocurrió un error al registrar el curso.");
        });
    };

    const filteredCourses = cursos.filter((curso) => 
        curso.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="cursos-registrados-section">
            <h2 className="title">Cursos Registrados</h2>
            <input 
                type="text" 
                className="barra-busqueda" 
                placeholder="Buscar cursos..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <button className="archivados-button" onClick={() => alert("Ver cursos archivados")}>Archivados</button>
            <div className="course-list">
                {filteredCourses.map((curso, index) => (
                    <CursoCard key={index} curso={curso} />
                ))}
            </div>

            <button className="add-button" onClick={togglePopup}>+</button>

            <CursoFormulario showPopup={showPopup} togglePopup={togglePopup} planes={planes} saveCourse={confirmSaveCourse} />
        </div>
    );
};
