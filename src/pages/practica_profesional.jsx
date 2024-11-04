import React from 'react';
import { useNavigate } from 'react-router-dom';

import NavBar from '../components/nav_bar';

export const HomePage = () => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate('/inicio'); // Navegar a la ruta "/inicio" al hacer clic en "Practica DI"
  };

  return (
    <>
      <NavBar />
      <div className="login-container">
        <h1 onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
          Practica DI
        </h1>
        <p>Universidad Tecnico Federico Santa Maria</p>
        <div className="base">
          <p>Bienvenido al portal de Practicas DI</p>
          <div className="button-container">
            <div className="button-box" onClick={() => navigate('/practica_convalidar')} style={{ cursor: 'pointer' }}>
              <p>Convalidar Práctica</p>
            </div>
            <div className="button-box" onClick={() => navigate('/practica_inscribir')} style={{ cursor: 'pointer' }}>
              <p>Inscribir Práctica</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
