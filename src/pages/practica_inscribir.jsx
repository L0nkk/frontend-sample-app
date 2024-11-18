import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/nav_bar';



export const PracticaInscribir = () => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/practica_registrada') // Change '/new-route' to the desired route path
  }
  const handleTitleClick = () => {
    navigate('/inicio/0') // Change '/new-route' to the desired route path
  }

  return (
    <>

        <NavBar />

      <div className="inscripcion-container">
        <h1 onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
          Practica DI
        </h1>
        <p>Universidad Tecnico Federico Santa Maria</p>
        
        <div className="login-form">
          <h3>Practica Profesional</h3>
            
          
          <div class="form-item">
            <label htmlFor="tiempo">Tiempo</label>
            <select id="tiempo">
              <option value="two-months">2 meses</option>
              <option value="three-months">3 meses</option>
            </select>
          </div>

          <div class="form-item">
            <label htmlFor="empresa">Empresa</label>
            <input type="text" id="empresa" placeholder="Empresa SPA" />
          </div>
          
        
          <div class="form-item">
            <label htmlFor="supervisor">Supervisor</label>
            <input type="text" id="supervisor" placeholder="Juan Supervisa" />
          </div>
          

          <div class="form-item">
            <label htmlFor="supervisor-email">Correo supervisor</label>
            <input type="email" id="supervisor-email" placeholder="juan.supervisa@empresa.cl" />
          </div>
          

          <div class="form-item">
            <label htmlFor="fecha-inicio">Fecha Inicio</label>
            <input type="date" id="fecha-inicio"  />
          </div>
          

          <div class="form-item">
            <label htmlFor="fecha-termino">Fecha Termino</label>
            <input type="date" id="fecha-termino"  />
          </div>
          
          <div class="form-item">
            <label htmlFor="rut-empresa">RUT Empresa</label>
            <input type="text" id="rut-empresa" placeholder="77.777.777-7" />
          </div>
          

          <div class="form-item">
            <label htmlFor="direccion-empresa">Direccion Empresa</label>
            <input type="text" id="direccion-empresa" placeholder="Avenida calle 123 oficina 4" />
          </div>
          

          <button type="submit" onClick={handleSubmit}>Registrar</button>
        </div>
      </div>
    </>
  )
}

export default PracticaInscribir
