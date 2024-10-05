import React from "react";

const View = () => {
    // Funciones para manejar los clics
    const handleExportToExcel = () => {
        console.log("Exportar a Excel"); // Lógica para exportar a Excel
    };

    const handleExportToPDF = () => {
        console.log("Exportar a PDF"); // Lógica para exportar a PDF
    };

    const handleAddUser = () => {
        console.log("Agregar Usuario"); // Lógica para agregar usuario
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">USUARIOS REGISTRADOS</h2>

            <div className="d-flex justify-content-between mb-4">
                <button className="btn btn-success" onClick={handleAddUser}>
                    Agregar <i className="bx bx-plus"></i>
                </button>

                <div>

                    <button className="btn btn-primary me-2" onClick={handleExportToExcel}>
                        <i className="fas fa-file-excel me-2"></i>
                        Exportar a Excel
                    </button>

                    <button className="btn btn-danger" onClick={handleExportToPDF}>
                        <i className="fas fa-file-pdf me-2"></i>
                        Exportar a PDF
                    </button>
                </div>
            </div>

            {/* TABLA DE USUARIOS */}
        </div>
    );
};

export default View;
