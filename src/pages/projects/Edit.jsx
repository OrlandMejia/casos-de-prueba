import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import Select from "react-select"; // Importa React Select

const Create = () => {
    const navigate = useNavigate(); // Inicializa useNavigate

    const handleBack = () => {
        navigate("/projects/new"); // Redirige a la vista de proyectos creados
    };

    const handleSave = () => {
        console.log("Guardar Proyecto"); // Lógica para guardar el proyecto
    };

    // Opciones para el select
    const userOptions = [
        { value: "user1", label: "Usuario 1" },
        { value: "user2", label: "Usuario 2" },
        { value: "user3", label: "Usuario 3" }
    ];

    return (
        <div className="container mt-4">
            <h2 className="mb-4">EDITAR PROYECTO: </h2>
            <div className="d-flex justify-content-end mb-4">
                <button className="btn btn-secondary" onClick={handleBack}>
                    Regresar
                </button>
            </div>

            {/* Fila para el Código y Nombre */}
            <div className="row mb-4">
                <div className="col-md-4">
                    <label htmlFor="code" className="form-label">Código</label>
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="bx bx-code"></i>
                        </span>
                        <input type="text" id="code" className="form-control" placeholder="Código" />
                    </div>
                </div>
                <div className="col-md-8">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="bx bx-folder"></i> 
                        </span>
                        <input type="text" id="name" className="form-control" placeholder="Nombre del Proyecto" />
                    </div>
                </div>
            </div>

            {/* Textarea para Descripción */}
            <div className="mb-4">
                <label htmlFor="description" className="form-label">Descripción</label>
                <div className="input-group">
                    <span className="input-group-text">
                        <i className="bx bx-list-ul"></i>
                    </span>
                    <textarea id="description" className="form-control" rows="4" placeholder="Descripción del Proyecto"></textarea>
                </div>
            </div>

            {/* Fila para Usuarios Asignados y Fecha de Terminación */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <label htmlFor="assignedUsers" className="form-label">Usuarios Asignados</label>
                    <Select
                        id="assignedUsers"
                        options={userOptions}
                        className="basic-single"
                        classNamePrefix="select"
                        placeholder="Seleccionar Usuario"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="dueDate" className="form-label">Fecha de Terminación</label>
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="bx bx-calendar"></i>
                        </span>
                        <input type="date" id="dueDate" className="form-control" />
                    </div>
                </div>
            </div>

            {/* Botón Guardar */}
            <button className="btn btn-success" onClick={handleSave}>
                Guardar <i className="bx bx-save"></i> 
            </button>
        </div>
    );
};

export default Create;
