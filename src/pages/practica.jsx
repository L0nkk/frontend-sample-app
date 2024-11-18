import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/nav_bar';

export const Practica = () => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate('/inicio'); // Navigate to the "/inicio" route when "Practica DI" is clicked
  };

  const {completed} = useParams()
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
            <div className="button-box" onClick={() => navigate('/practica_industrial')} style={{ cursor: 'pointer' }}>
              <p>Practica Industrial</p>
              <div className="status">
                <span className="status-label">Estado:</span>
                <span className="status-completo">Completo</span>
              </div>
            </div>
            <div className="button-box" onClick={() => navigate(completed == 0 ? '/practica_profesional/0' : "/practica_profesional/1")} style={{ cursor: 'pointer' }}>
              <p>Practica Profesional</p>
              <div className="status">
                <span className="status-label">Estado:</span>
                <span className={ completed == 0 ? "status-incompleto" : "status-completo"}>{completed==0 ? "Incompleto" : "Completo"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Practica;
