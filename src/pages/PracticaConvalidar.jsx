import React from 'react';
import { useNavigate } from 'react-router-dom';

import NavBar from '../components/nav_bar';

export const PracticaConvalidar = () => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate('/inicio'); // Navegar a la ruta "/inicio" al hacer clic en "Practica DI"
  };

  return (
    <>
      <NavBar />
      <div className="main-container">
        <h1 onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
          Practica DI
        </h1>
        <p>Universidad Tecnico Federico Santa Maria</p>
        <div className="base">
          <p>Convalidar Practica</p>
          <div className="button-container">
            <div className="button-box" onClick={() => navigate('/practica_inscribir')} style={{ cursor: 'pointer' }}>
              <p>Trabajo Profesional</p>
            </div>
            <div className="button-box" onClick={() => navigate('/practica_inscribir')} style={{ cursor: 'pointer' }}>
              <p>Practica Investigativa</p>
            </div>
            <div className="button-box" onClick={() => navigate('/practica_inscribir')} style={{ cursor: 'pointer' }}>
              <p>Trabajo Social</p>
            </div>
            <div className="button-box" onClick={() => navigate('/practica_inscribir')} style={{ cursor: 'pointer' }}>
              <p>Emprendimiento </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PracticaConvalidar;
