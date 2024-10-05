import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import Select from "react-select"; // Importa React Select

const Create = () => {
    const navigate = useNavigate(); // Inicializa useNavigate

    const handleBack = () => {
        navigate("/case/new"); // Redirige a la vista de nuevos casos
    };

    const handleSave = () => {
        console.log("Guardar Caso de Prueba"); // Lógica para guardar el caso de prueba
    };

    // Opciones para los selects
    const reporterOptions = [
        { value: "user1", label: "Usuario 1" },
        { value: "user2", label: "Usuario 2" },
        { value: "user3", label: "Usuario 3" }
    ];

    const assignOptions = [
        { value: "user1", label: "Usuario 1" },
        { value: "user2", label: "Usuario 2" },
        { value: "user3", label: "Usuario 3" }
    ];

    const projectOptions = [
        { value: "project1", label: "Proyecto 1" },
        { value: "project2", label: "Proyecto 2" },
        { value: "project3", label: "Proyecto 3" }
    ];

    const priorityOptions = [
        { value: "alta", label: "Alta" },
        { value: "media", label: "Media" },
        { value: "baja", label: "Baja" }
    ];

    return (
        <div className="container mt-4">
            <h2 className="mb-4">CREAR CASO DE PRUEBA</h2>
            
            {/* Fila para el botón Regresar alineado a la derecha */}
            <div className="d-flex justify-content-end mb-4">
                <button className="btn btn-secondary" onClick={handleBack}>
                    Regresar
                </button>
            </div>

            {/* Fila para Código, Nombre y Reportado Por */}
            <div className="row mb-4">
                <div className="col-md-4">
                    <label htmlFor="code" className="form-label">Código</label>
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="bx bx-code"></i> {/* Icono para Código */}
                        </span>
                        <input type="text" id="code" className="form-control" placeholder="Código" />
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="bx bx-folder"></i> {/* Icono para Nombre */}
                        </span>
                        <input type="text" id="name" className="form-control" placeholder="Nombre del Caso" />
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="reportedBy" className="form-label">Reportado Por</label>
                    <Select
                        id="reportedBy"
                        options={reporterOptions}
                        className="basic-single"
                        classNamePrefix="select"
                        placeholder="Seleccionar Usuario"
                    />
                </div>
            </div>

            {/* Textarea para Descripción */}
            <div className="mb-4">
                <label htmlFor="description" className="form-label">Descripción</label>
                <div className="input-group">
                    <span className="input-group-text">
                        <i className="bx bx-list-ul"></i> {/* Icono para Descripción */}
                    </span>
                    <textarea id="description" className="form-control" rows="4" placeholder="Descripción del Caso"></textarea>
                </div>
            </div>

            {/* Fila para Asignar A, Asignar Proyecto, Prioridad y Fecha de Reporte */}
            <div className="row mb-4">
                <div className="col-md-4">
                    <label htmlFor="assignTo" className="form-label">Asignar A</label>
                    <Select
                        id="assignTo"
                        options={assignOptions}
                        className="basic-single"
                        classNamePrefix="select"
                        placeholder="Seleccionar Usuario"
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="assignProject" className="form-label">Asignar Proyecto</label>
                    <Select
                        id="assignProject"
                        options={projectOptions}
                        className="basic-single"
                        classNamePrefix="select"
                        placeholder="Seleccionar Proyecto"
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="priority" className="form-label">Prioridad</label>
                    <Select
                        id="priority"
                        options={priorityOptions}
                        className="basic-single"
                        classNamePrefix="select"
                        placeholder="Seleccionar Prioridad"
                    />
                </div>
            </div>

            {/* Fila para Fecha de Reporte y Link del Recurso */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <label htmlFor="reportDate" className="form-label">Fecha de Reporte</label>
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="bx bx-calendar"></i> {/* Icono para Fecha */}
                        </span>
                        <input type="date" id="reportDate" className="form-control" />
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="resourceLink" className="form-label">Link del Recurso</label>
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="bx bx-link"></i> {/* Icono para Link */}
                        </span>
                        <input type="text" id="resourceLink" className="form-control" placeholder="https://ejemplo.com" />
                    </div>
                </div>
            </div>

            {/* Botón Guardar */}
            <button className="btn btn-success" onClick={handleSave}>
                Guardar <i className="bx bx-save"></i> {/* Icono de Guardar */}
            </button>
        </div>
    );
};

export default Create;
