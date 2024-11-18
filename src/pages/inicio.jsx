import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import NavBar from '../components/nav_bar';

export const HomePage = () => {
  const {completed} = useParams()


  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate(`/inicio/${completed}`); // Navegar a la ruta "/inicio" al hacer clic en "Practica DI"
  };


  return (
    <>
      <NavBar completed={completed}/>
      <div className="login-container">
        <h1 onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
          Practica DI
        </h1>
        <p>Universidad Tecnico Federico Santa Maria</p>
        <div className="base">
          <p>Bienvenido al portal de Practicas DI</p>
          {/* SVG de una carita feliz */}
          <svg width="100" height="100" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 26C14 26 17 30 22 30C27 30 30 26 30 26M16 16H16.02M28 16H28.02M42 22C42 33.0457 33.0457 42 22 42C10.9543 42 2 33.0457 2 22C2 10.9543 10.9543 2 22 2C33.0457 2 42 10.9543 42 22Z" 
                stroke="#1E1E1E" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round"/>
        </svg>
        </div>
      </div>
    </>
  );
}

export default HomePage;
