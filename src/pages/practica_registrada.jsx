import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/nav_bar';



export const PracticaRegistarda = () => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/inicio') // Change '/new-route' to the desired route path
  }
  const handleTitleClick = () => {
    navigate('/inicio') // Change '/new-route' to the desired route path
  }

  return (
    <>
    <NavBar />
    <div className="inscripcion-completa-container">
      <h1 onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
        Practica DI
      </h1>
      <p>Universidad Tecnico Federico Santa Maria</p>
      <div className="base">
        <h2>Practica Inscrita con Exito</h2>
        <div className="button-container">
          <div className="button-box" onClick={() => navigate('/inicio')} style={{ cursor: 'pointer' }}>
            <p>Volver a inicio</p>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default PracticaRegistarda
