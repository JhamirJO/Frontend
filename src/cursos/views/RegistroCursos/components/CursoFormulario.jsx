import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogActions, Button, TextField, DialogContentText, Autocomplete } from "@mui/material";
import "../CursosRegistrados.css";
import "./CursoFormulario.css";

const CursoFormulario = ({ showPopup, togglePopup, planes, departamentos, saveCourse }) => {
    const [cursoData, setCursoData] = useState({
        codigo: "",
        nombre: "",
        seccion: "",
        planEstudiosId: null,
        departamentoid: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCursoData({ ...cursoData, [name]: value });
    };

    const handlePlanChange = (event, newValue) => {
        setCursoData({ ...cursoData, planEstudiosId: newValue?.id || null });
        
    };

    const handleDepartamentoChange = (event, newValue) => {
        setCursoData({ ...cursoData, departamentoid: newValue?.id || null});
    };

    const handleSaveCourse = () => {
        if (!cursoData.codigo || !cursoData.nombre || !cursoData.planEstudiosId || 
            !cursoData.seccion || !cursoData.departamentoid) {
            alert("Por favor, complete todos los campos requeridos.");
            return;
        }
        saveCourse(cursoData);
    };

    return (
        <Dialog open={showPopup} onClose={togglePopup} maxWidth="sm" fullWidth>
            <DialogTitle>Registro de Curso</DialogTitle>
            <DialogContent>
                <TextField 
                    label="Código" 
                    name="codigo" 
                    fullWidth 
                    margin="dense" 
                    required 
                    onChange={handleInputChange} 
                    placeholder="p. ej.: 50W0101"
                />
                <TextField 
                    label="Nombre" 
                    name="nombre" 
                    fullWidth 
                    margin="dense" 
                    required 
                    onChange={handleInputChange} 
                    placeholder="p. ej.: Desarrollo de Software"
                />
                <Autocomplete 
                    options={planes} 
                    getOptionLabel={(option) => option.descripcion || ""} 
                    onChange={handlePlanChange}
                    renderInput={(params) => (
                        <TextField 
                            {...params} 
                            label="Plan de Estudio" 
                            fullWidth 
                            margin="dense" 
                            required 
                        />
                    )} 
                />
                <Autocomplete 
                    options={departamentos} 
                    getOptionLabel={(option) => option.codigo || ""} 
                    onChange={handleDepartamentoChange}
                    renderInput={(params) => (
                        <TextField 
                            {...params} 
                            label="Departamento" 
                            fullWidth 
                            margin="dense" 
                            required 
                        />
                    )} 
                />
                <TextField 
                    label="Sección" 
                    name="seccion" 
                    fullWidth 
                    margin="dense" 
                    required 
                    onChange={handleInputChange} 
                    placeholder="p. ej.: 1, 2, 5" 
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={togglePopup} className="course-button-Cancelar">Cancelar</Button>
                <Button onClick={handleSaveCourse} className="course-button-Guardar">Guardar Curso</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CursoFormulario;
