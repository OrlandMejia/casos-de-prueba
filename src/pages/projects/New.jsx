import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

const New = () => {
    const navigate = useNavigate(); // Inicializa useNavigate

    // Funciones para manejar los clics
    const handleExportToExcel = () => {
        console.log("Exportar a Excel"); // Lógica para exportar a Excel
    };

    const handleExportToPDF = () => {
        console.log("Exportar a PDF"); // Lógica para exportar a PDF
    };

    const handleAddProject = () => {
        navigate("/projects/create"); // Redirige a la ruta de crear proyecto
    };

    const handleBack = () => {
        navigate("/projects/view"); // Redirige a la vista de nuevos casos
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">PROYECTOS CREADOS</h2>

            <div className="d-flex justify-content-between mb-4">
                {/* Botón de Agregar Proyecto y Regresar en la misma fila */}
                <div>
                    <button className="btn btn-success me-2" onClick={handleAddProject}>
                        Agregar Proyecto <i className="bx bx-plus"></i> {/* Icono + */}
                    </button>
                    <button className="btn btn-secondary" onClick={handleBack}>
                        Regresar
                    </button>
                </div>

                <div>
                    {/* Botón de Exportar a Excel */}
                    <button className="btn btn-primary me-2" onClick={handleExportToExcel}>
                        <i className="fas fa-file-excel me-2"></i> {/* Icono de Excel */}
                        Exportar a Excel
                    </button>

                    {/* Botón de Exportar a PDF */}
                    <button className="btn btn-danger" onClick={handleExportToPDF}>
                        <i className="fas fa-file-pdf me-2"></i> {/* Icono de PDF */}
                        Exportar a PDF
                    </button>
                </div>
            </div>

            {/* Aquí puedes agregar la tabla de proyectos más adelante */}
        </div>
    );
};

export default New;
