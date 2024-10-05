import { useEffect } from "react";

export const DashboardPage = () => {
    useEffect(() => {

    }, [])
    return (
        <>
                <div>
            <h2 className="mb-4">PANEL DE CONTROL</h2>

            <div className="row">
                <div className="col-lg-4 col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <span className="fw-medium d-block mb-1">Proyectos Creados</span>
                            <h3 className="card-title mb-2">25</h3> 
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <span className="fw-medium d-block mb-1">Proyectos en Curso</span>
                            <h3 className="card-title mb-2">10</h3>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <span className="fw-medium d-block mb-1">Proyectos Terminados</span>
                            <h3 className="card-title text-nowrap mb-2">15</h3> {/* Número de ejemplo */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
};