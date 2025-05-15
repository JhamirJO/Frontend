import React, { useState } from 'react'
import { CursosLayout } from '../layout';
import { CursosResumen, CursosCopiar, CursosRegistrados, CursoDetalles, CursoConfiguracion} from '../views';


export const CursosHome = ( {vista} ) => {
    
    let contenido;
    //console.log(vista);
    if (vista === 'resumen') {
        contenido = <CursosResumen />;
    } else if (vista === 'copiar') {
        contenido = <CursosCopiar />;
    } else if (vista === 'registrados') {
        contenido = <CursosRegistrados />;
    } else if (vista === 'detalles/:id') {
        contenido = <CursoDetalles />;
    } else if (vista === '/:id/configuracion') {
        contenido = <CursoConfiguracion />;
    }else {
        contenido = <br></br>;
    }

    return (
        <CursosLayout >
            { contenido }
        </CursosLayout>
    )
}
