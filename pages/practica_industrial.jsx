import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "../frontend-sample-app/components/nav_bar";
import Bitacora from "../components/Bitacora";

export const HomePage = () => {
  const navigate = useNavigate();
  const [showAlternativeView, setShowAlternativeView] = useState(true);

  const handleTitleClick = () => {
    navigate("/inicio"); // Navega a la ruta "/inicio" cuando se hace clic en "Practica DI"
  };

  const toggleView = () => {
    setShowAlternativeView(!showAlternativeView);
  };

  const notas = [
    { name: "Capacidad", calificacionn: 4 },
    { name: "Confianza", calificacionn: 5 },
    { name: "Aplicacion y Empeño", calificacionn: 5 },
    { name: "Adaptabilidad", calificacionn: 5 },
    { name: "Iniciativa", calificacionn: 5 },
    { name: "Aptitud Trabajo en Equipo", calificacionn: 5 },
    { name: "Asistencia y Puntualidad", calificacionn: 5 },
    { name: "Logro de Resultados", calificacionn: 3 },
    { name: "Comunicacion Efectiva", calificacionn: 5 },
  ];

  const estado = {
    estado: "En Revision",
    progreso: 320,
    empresa: "Palta inc.",
    supervisor: "Superv Gonnzales",
  };

  const tiempos = {
    modo: "2 meses",
    inicio: "03/01/2025",
    termino: "08/03/2025",
  };

  // Convertimos bitacoras a un diccionario
  const bitacoras = {
    "10/01/2025": "Me fue muy bien",
    "17/01/2025": "Soy una bitacora 2, limpie bases de datos",
    "24/01/2025": "Me encanta trabajar aca, migre una base de excel a DynamoDB",
    "31/01/2025":
      "Soy una bitacora bastante larga. Tuve que hacer un analisis de requerimientos de una empresa que vende paltas, ellos querian microservicios pero no les convenia debido a su bajo presupuesto y a la falta de profesionales informaticos. Me gusta la palta",
    "07/02/2025": "Soy una bitacora corta que deberia causar overflow. MUCHO sql",
  };

  return (
    <>
      <NavBar />
      <div className="resumen-container">
        <h1 onClick={handleTitleClick} style={{ cursor: "pointer" }}>
          Practica DI
        </h1>
        <p>Universidad Tecnica Federico Santa Maria</p>
        <div className="base" style={{ position: "relative" }}>
          <div className="toggle-view-container">
            <button
              onClick={toggleView}
              className={`toggle-view-button-${
                showAlternativeView ? "active" : "inactive"
              }`}>
              INFORMACIÓN
            </button>
            <button
              onClick={toggleView}
              className={`toggle-view-button-${
                !showAlternativeView ? "active" : "inactive"
              }`}>
              EVALUACIÓN
            </button>
          </div>

          {/* Renderiza condicionalmente Notas y Observaciones basado en el estado de vista alternativa */}
          {!showAlternativeView && (
            <div className="summary-container">
              <div className="notas">
                <h3>Notas</h3>
                <ul className="notas-lista">
                  {notas.map((item, index) => {
                    return (
                      <li key={index} className="notas-item">
                        {item.name}
                        <span
                          className="notas-item-nota"
                          style={
                            item.calificacionn < 4
                              ? { color: "rgb(180, 1, 1)" }
                              : { color: "#222" }
                          }>
                          {item.calificacionn}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="observaciones">
                <h3>Observaciones</h3>
                <p>Buen profesional</p>
              </div>
            </div>
          )}

          {/* Vista Alternativa */}
          {showAlternativeView && (
            <div className="alternative-view">
              <div className="left-column">
                <div className="estado">
                  <h3>
                    <strong>Estado:</strong> {estado.estado}
                  </h3>
                  <h3>
                    <strong>Progreso:</strong> {estado.progreso} hrs.
                  </h3>
                  <h3>
                    <strong>Empresa:</strong> {estado.empresa}
                  </h3>
                  <h3>
                    <strong>Supervisor:</strong> {estado.supervisor}
                  </h3>
                </div>
                <div className="tiempo">
                  <h2>Tiempos: </h2>
                  <h3>
                    <strong>Modo: </strong>
                    {tiempos.modo}
                  </h3>
                  <h3>
                    <strong>Inicio: </strong>
                    {tiempos.inicio}
                  </h3>
                  <h3>
                    <strong>Termino: </strong>
                    {tiempos.termino}
                  </h3>
                </div>
              </div>

              <div className="bitacora">
                <h2>Bitácora</h2>
                <ul>
                  {Object.entries(bitacoras).map(([date, content]) => (
                    <Bitacora key={date} date={date} content={content} />
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
