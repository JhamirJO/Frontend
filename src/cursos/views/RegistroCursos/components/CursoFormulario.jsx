import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogActions, Button, TextField, DialogContentText, Autocomplete } from "@mui/material";

const CursoFormulario = ({ showPopup, togglePopup, planes, saveCourse }) => {
    const [cursoData, setCursoData] = useState({
        codigo: "",
        nombre: "",
        seccion: "",
        planEstudiosId: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCursoData({ ...cursoData, [name]: value });
    };

    const handlePlanChange = (event, newValue) => {
        setCursoData({ ...cursoData, planEstudiosId: newValue?.id || null });
    };

    const handleSaveCourse = () => {
        if (!cursoData.codigo || !cursoData.nombre || !cursoData.planEstudiosId) {
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
                <Button onClick={togglePopup} variant="outlined">Cancelar</Button>
                <Button onClick={handleSaveCourse} variant="contained" color="primary">Guardar Curso</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CursoFormulario;
