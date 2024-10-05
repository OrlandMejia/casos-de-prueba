import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate correctamente


const View = () => {
    const navigate = useNavigate(); // Hook para redirigir a otras rutas

    useEffect(() => {}, []);

    // Funciones para manejar los clics y redirigir a nuevas rutas
    const handleCreateProject = () => {
        navigate("/projects/new"); // Redirige a la vista de creación de proyectos
    };

    const handleCreateTestCase = () => {
        navigate("/case/new"); // Redirige a la vista de casos de prueba
    };

    const handleErrorReports = () => {
        navigate("/case/report"); // Redirige a la vista de reportes de errores
    };

    return (
        <>
            <div>
                <h2 className="mb-4">PROYECTOS CREADOS</h2>

                <div className="row">
                    <div className="col-lg-4 col-md-4 mb-4">
                        <div className="card text-center button-card" onClick={handleCreateProject}>
                            <div className="card-body">
                                <span className="fw-medium d-block mb-1">PROYECTOS CREADOS</span>
                                <h3 className="card-title mb-2">
                                    <i className="bx bx-plus icon-large"></i>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 mb-4">
                        <div className="card text-center button-card" onClick={handleCreateTestCase}>
                            <div className="card-body">
                                <span className="fw-medium d-block mb-1">CASOS DE PRUEBA</span>
                                <h3 className="card-title mb-2">
                                    <i className="bx bx-pencil icon-large"></i>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 mb-4">
                        <div className="card text-center button-card" onClick={handleErrorReports}>
                            <div className="card-body">
                                <span className="fw-medium d-block mb-1">REPORTES DE ERRORES (MATRIZ)</span>
                                <h3 className="card-title mb-2">
                                    <i className="bx bx-table icon-large"></i>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                    .button-card {
                        cursor: pointer;
                        transition: transform 0.2s, box-shadow 0.2s;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }
                    .button-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                    }
                    .button-card:active {
                        transform: translateY(2px);
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }
                    .icon-large {
                        font-size: 2rem;
                    }
                `}</style>
        </>
    );
};

export default View;
