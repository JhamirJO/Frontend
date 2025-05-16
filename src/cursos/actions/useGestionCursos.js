// src/hooks/useGestionCursos.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCursos } from "../actions/cursoThunks";
import { fetchDepartamento } from "./departamentoThunks";
import { fetchPlanEstudiosActivos } from "./planestudioThunks";

const useGestionCursos = () => {
    const dispatch = useDispatch();
    
    // Estado global de cursos
    const { cursos, estaCargandoCursos, error: errorCursos } = useSelector((state) => state.curso);
    const { data: departamentos = [], estaCargandoDepartamentos, error: errorDepartamentos } = useSelector((state) => state.departamento);
    const { data: planes = [], estaCargandoPlanes, error: errorPlanes } = useSelector((state) => state.planEstudios);

    useEffect(() => {
        // Cargar Cursos
        if (cursos.length === 0) {
            dispatch(getCursos()).catch((error) => {
                console.error("Error al cargar cursos:", error);
            });
        }

        // Cargar Departamentos
        if (departamentos.length === 0) {
            dispatch(fetchDepartamento()).catch((error) => {
                console.error("Error al cargar departamentos:", error);
            });
        }

        // Cargar Planes de Estudio
        if (planes.length === 0) {
            dispatch(fetchPlanEstudiosActivos()).catch((error) => {
                console.error("Error al cargar planes de estudio:", error);
            });
        }
    }, [dispatch, cursos.length, departamentos.length, planes.length]);

    return {
        cursos,
        estaCargandoCursos,
        errorCursos,
        departamentos,
        estaCargandoDepartamentos,
        errorDepartamentos,
        planes,
        estaCargandoPlanes,
        errorPlanes
    };
};

export default useGestionCursos;
