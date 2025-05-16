import React, { useState } from "react";
import "./CursosRegistrados.css";
import { useDispatch } from 'react-redux';
import { createCurso } from "../../actions/cursoThunks";
import CursoFormulario from "./components/CursoFormulario";
import { FiltroDepartamento, BarraBusqueda, VistaCursos, ListaCursos } from "./components/utilidadesCurso";
import useGestionCursos from "../../actions/useGestionCursos";
import "./components/CursoCard.css";

export const CursosRegistrados = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [isGridView, setIsGridView] = useState(true);
    const [selectedDepartamento, setSelectedDepartamento] = useState(null);
    
    const dispatch = useDispatch();
    const {
        cursos,
        estaCargandoCursos,
        errorCursos,
        departamentos,
        estaCargandoDepartamentos,
        errorDepartamentos,
        planes,
        estaCargandoPlanes,
        errorPlanes
    } = useGestionCursos();

    const togglePopup = () => setShowPopup(!showPopup);

    const confirmSaveCourse = (cursoData) => {
        const newCourse = {
            ...cursoData,
            tipo: "obligatorio", 
            numHorasTeoria: 3, 
            numHorasPractica: 2, 
            numHorasLaboratorio: 1, 
            numCreditos: 4, 
            ciclo: "VII", 
            periodoAcademicoId: 4, 
            institucionid: 1, 
            estado: '1', 
            sumilla: "Curso de aprendizaje práctico.", 
            modalidad: "presencial", 
            etiquetas: "software, diseño, análisis"
        };

        dispatch(createCurso(newCourse))
            .then(() => {
                setShowPopup(false);
                setShowSuccessModal(true);
                setTimeout(() => setShowSuccessModal(false), 3000); // Modal de éxito se cierra automáticamente en 3 segundos
            })
            .catch((error) => {
                console.error("Error al guardar el curso:", error);
                alert("Ocurrió un error al registrar el curso.");
            });
    };

    if (errorCursos || errorDepartamentos || errorPlanes) {
        return <p>Error al cargar datos.</p>;
    }

    const filteredCourses = cursos.filter((curso) => {
        const matchSearch = curso.nombre.toLowerCase().includes(searchTerm.toLowerCase());
        const matchDepartamento = selectedDepartamento 
            ? curso.departamentoid === selectedDepartamento.id 
            : true;
        return matchSearch && matchDepartamento;
    });

    return (
        <div className="cursos-registrados-section">
            <h2 className="title">Cursos Registrados</h2>
            
            <FiltroDepartamento 
                departamentos={departamentos} 
                onDepartamentoChange={setSelectedDepartamento} 
            />
            <BarraBusqueda 
                searchTerm={searchTerm} 
                onSearchChange={setSearchTerm} 
            />
            <VistaCursos 
                isGridView={isGridView} 
                onToggleView={() => setIsGridView(!isGridView)} 
            />
            <ListaCursos 
                cursos={filteredCourses} 
                isGridView={isGridView} 
            />

            <button className="add-button" onClick={togglePopup}>+</button>
            <CursoFormulario 
                showPopup={showPopup} 
                togglePopup={togglePopup} 
                planes={planes} 
                departamentos={departamentos} 
                saveCourse={confirmSaveCourse} 
            />

            {/* Modal de Éxito */}
            {showSuccessModal && (
                <div className="success-modal">
                    <div className="success-modal-content">
                        <h3>¡Curso guardado exitosamente!</h3>
                        <button onClick={() => setShowSuccessModal(false)}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
};
