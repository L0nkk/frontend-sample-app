import React from 'react'
import { useNavigate } from 'react-router-dom'

import NavBar from '../components/nav_bar'

export const HomePage = () => {
  const navigate = useNavigate()

  const handleTitleClick = () => {
    navigate('/inicio'); // Navigate to the "/inicio" route when "Practica DI" is clicked
  };

  return (
    <>
      <NavBar />
      <div className="login-container">
        <h1 onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
            Practica DI
        </h1>
        <p>Universidad Tecnico Federico Santa Maria</p>
        <div className="login-form">
          <p>informacio</p>
        </div>
      </div>
    </>
  )
}

export default HomePage
