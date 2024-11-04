import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NavBar from '../components/nav_bar';

export const HomePage = () => {
  const navigate = useNavigate();
  const [showAlternativeView, setShowAlternativeView] = useState(false);

  const handleTitleClick = () => {
    navigate('/inicio'); // Navigate to the "/inicio" route when "Practica DI" is clicked
  };

  const handleConvalidarClick = () => {
    navigate('/practica_convalidar'); // Navigate to the "/practica_convalidar"
  };

  const handleInscribirClick = () => {
    navigate('/practica_inscribir'); // Navigate to the "/practica_inscribir"
  };

  const toggleView = () => {
    setShowAlternativeView(!showAlternativeView);
  };

  return (
    <>
      <NavBar />
      <div className="login-container">
        <h1 onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
          Practica DI
        </h1>
        <p>Universidad Tecnico Federico Santa Maria</p>
        <div className="base" style={{ position: 'relative' }}>
          {/* Place the button at the top-left corner inside the base */}
          <button onClick={toggleView} className="toggle-view-button" style={{ position: 'absolute', top: '20px', left: '20px' }}>
            {showAlternativeView ? 'Informacion' : 'Evaluacion'}
          </button>

          {/* Conditionally render Notas and Observaciones based on the alternative view state */}
          {!showAlternativeView && (
            <div className="summary-container">
              <div className="notas">
                <h3>Notas</h3>
                <ul>
                  <li>Confianza: 3</li>
                  <li>Capacidad: 4</li>
                  <li>Iniciativa: 5</li>
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
