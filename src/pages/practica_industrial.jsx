import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "../components/nav_bar";

export const HomePage = () => {
  const navigate = useNavigate();
  const [showAlternativeView, setShowAlternativeView] = useState(true);

  const handleTitleClick = () => {
    navigate("/inicio"); // Navigate to the "/inicio" route when "Practica DI" is clicked
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

  return (
    <>
      <NavBar />
      <div className="resumen-container">
        <h1 onClick={handleTitleClick} style={{ cursor: "pointer" }}>
          Practica DI
        </h1>
        <p>Universidad Tecnico Federico Santa Maria</p>
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

          {/* Conditionally render Notas and Observaciones based on the alternative view state */}
          {!showAlternativeView && (
            <div className="summary-container">
              <div className="notas">
                <h3>Notas</h3>
                <ul className="notas-lista">
                  {notas.map((item, index) => {
                    return (
                      <li className="notas-item">
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

          {/* Alternative View */}
          {showAlternativeView && (
            <div className="alternative-view">
              <div className="estado">
                <h3>Estado</h3>
                <p>Detalles sobre el estado del estudiante.</p>
              </div>
              <div className="tiempo">
                <h3>Tiempo</h3>
                <p>Información sobre el tiempo dedicado.</p>
              </div>
              <div className="bitacora">
                <h3>Bitácora</h3>
                <p>Notas de seguimiento y comentarios.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
