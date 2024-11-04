import React from 'react';
import { useNavigate } from 'react-router-dom';

import NavBar from '../components/nav_bar';

export const HomePage = () => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate('/inicio'); // Navegar a la ruta "/inicio" cuando se hace clic en "Practica DI"
  };

  return (
    <>
      <NavBar />
      <div className="login-container">
        <h1 onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
          Practica DI
        </h1>
        <p>Universidad Técnica Federico Santa María</p>
        <div className="base">
          {/* Información de perfil genérica */}
          <div className="profile">
            <img
              src="https://via.placeholder.com/100"
              alt="Avatar de Perfil"
              className="profile__avatar"
            />
            <h2 className="profile__name">Juan Pérez</h2>
            <p className="profile__email">juan.perez@example.com</p>
            <p className="profile__bio">
              Estudiante de Ingeniería en Computación, apasionado por el desarrollo web y las nuevas tecnologías.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
