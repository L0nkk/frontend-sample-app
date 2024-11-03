import React from 'react'

export const HomePage = () => {
  return (
    <>
      <div className="login-container">
      <h1>Practica DI</h1>
      <p>Universidad Tecnico Federico Santa Maria</p>
      <div className="login-form">
        <label htmlFor="username">Usuario</label>
        <input type="text" id="username" placeholder="Value" />
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" placeholder="Value" />
        <button type="submit">Submit</button>
      </div>
    </div>
    </>
  )
}

export default HomePage
