import { iniciaCargaCursos, cargaCursos, cargaCursoIdActivo } from '../slices/cursoSlice';
import { iniciaCargaCursoCard, cargaCursoCard, cargaCursoCardError } from '../slices/cursoCardSlice';


const urlBack = import.meta.env.VITE_APP_BACKEND_URL;
const apiCursos = import.meta.env.VITE_APP_API_CURSOS

export const getCursos = () => {

    return async(dispatch, getState) => {
        dispatch( iniciaCargaCursos() );

        const resp = await fetch(`${ urlBack + apiCursos }/cursos`);
        const data = await resp.json();
        
        console.log( data );
        dispatch( cargaCursos( { cursos: data } ) );
    }
}

export const setCursoIdActivo = ( cursoid ) => {

    return async(dispatch, getState) => {

        //onsole.log( data );
        dispatch( cargaCursoIdActivo( { cursoidActivo: cursoid } ) );
    }
}

export const createCurso = (cursoData) => {
    return async (dispatch, getState) => {
        dispatch(iniciaCargaCursos());

        try {
            const resp = await fetch(`${urlBack}api-cur/v1/crear`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cursoData),
            });

            if (!resp.ok) {
                const errorData = await resp.json();
                console.error("Error al crear el curso:", errorData);
                throw new Error(errorData.message || "Error al crear el curso");
            }

            const data = await resp.json();
            //console.log("Curso creado:", data);

            // Después de crear el curso, recargar los cursos y las tarjetas de curso
            await dispatch(getCursos());
            await dispatch(getCursoCard());

        } catch (error) {
            console.error("Error en el proceso de creación del curso:", error.message);
        }
    };
};

export const getCursoCard = () => {
    return async(dispatch, getState) => {
        dispatch(iniciaCargaCursoCard());

        try {
            const resp = await fetch(`${urlBack + apiCursos}/cursos-card`);
            if (!resp.ok) throw new Error("Error en la respuesta de la API");

            const data = await resp.json();
            dispatch(cargaCursoCard({ cursos: data }));
        } catch (error) {
            dispatch(cargaCursoCardError(error.message));
        }
    }
};

