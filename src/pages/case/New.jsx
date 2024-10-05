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

    const handleAddCase = () => {
        navigate("/case/create"); // Redirige a la ruta de crear un caso de prueba
    };

    const handleBack = () => {
        navigate("/projects/view"); // Redirige a la ruta correcta
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">CASOS DE PRUEBA CREADOS</h2>

            <div className="d-flex justify-content-between mb-4">
                <div>
                    {/* Botón de Agregar Caso y Regresar en la misma fila */}
                    <button className="btn btn-success me-2" onClick={handleAddCase}>
                        Agregar Caso <i className="bx bx-plus"></i> {/* Icono + */}
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

            {/* Aquí puedes agregar la tabla de casos de prueba más adelante */}
        </div>
    );
};

export default New;
