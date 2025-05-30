// src/components/ConfiguracionFormulario.jsx
import React from "react";

export const ConfiguracionFormulario = ({ cursoData, handleChange }) => {
    return (
        <form>
            <div>
                <label>ID del Curso:</label>
                <input type="text" value={cursoData.id} readOnly />
            </div>
            <div>
                <label>Código:</label>
                <input type="text" name="codigo" value={cursoData.codigo} onChange={handleChange} />
            </div>
            <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" value={cursoData.nombre} onChange={handleChange} />
            </div>
            <div>
                <label>Tipo:</label>
                <input type="text" name="tipo" value={cursoData.tipo} onChange={handleChange} />
            </div>
            <div>
                <label>Número de Horas Teoría:</label>
                <input type="number" name="numHorasTeoria" value={cursoData.numHorasTeoria} onChange={handleChange} />
            </div>
            <div>
                <label>Número de Horas Práctica:</label>
                <input type="number" name="numHorasPractica" value={cursoData.numHorasPractica} onChange={handleChange} />
            </div>
            <div>
                <label>Número de Horas Laboratorio:</label>
                <input type="number" name="numHorasLaboratorio" value={cursoData.numHorasLaboratorio} onChange={handleChange} />
            </div>
            <div>
                <label>Número de Créditos:</label>
                <input type="number" name="numCreditos" value={cursoData.numCreditos} onChange={handleChange} />
            </div>
            <div>
                <label>Plan de Estudios ID:</label>
                <input type="number" name="planEstudiosId" value={cursoData.planEstudiosId} onChange={handleChange} />
            </div>
            <div>
                <label>Ciclo:</label>
                <input type="text" name="ciclo" value={cursoData.ciclo} onChange={handleChange} />
            </div>
            <div>
                <label>Periodo Académico ID:</label>
                <input type="number" name="periodoAcademicoId" value={cursoData.periodoAcademicoId} onChange={handleChange} />
            </div>
            <div>
                <label>Institución ID:</label>
                <input type="number" name="institucionid" value={cursoData.institucionid} onChange={handleChange} />
            </div>
            <div>
                <label>Departamento ID:</label>
                <input type="number" name="departamentoid" value={cursoData.departamentoid} onChange={handleChange} />
            </div>
            <div>
                <label>Estado:</label>
                <input type="number" name="estado" value={cursoData.estado} onChange={handleChange} />
            </div>
            <div>
                <label>Sumilla:</label>
                <textarea name="sumilla" value={cursoData.sumilla} onChange={handleChange}></textarea>
            </div>
            <div>
                <label>Modalidad:</label>
                <input type="text" name="modalidad" value={cursoData.modalidad} onChange={handleChange} />
            </div>
            <div>
                <label>Etiquetas:</label>
                <input type="text" name="etiquetas" value={cursoData.etiquetas} onChange={handleChange} />
            </div>
        </form>
    );
};
