import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NavBar from '../components/nav_bar';

export const HomePage = () => {
  const navigate = useNavigate();
  
  // Estado para almacenar el término de búsqueda y la lista de empresas
  const [searchTerm, setSearchTerm] = useState('');
  
  // Lista de empresas (datos de ejemplo)
  const empresas = [
    { nombre: 'Empresa A', rut: '12345678-9' },
    { nombre: 'Empresa B', rut: '23456789-0' },
    { nombre: 'Empresa C', rut: '34567890-1' },
    { nombre: 'Empresa D', rut: '45678901-2' },
    { nombre: 'Empresa E', rut: '56789012-3' },
  ];

  // Filtrar empresas según el término de búsqueda
  const filteredEmpresas = empresas.filter((empresa) =>
    empresa.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        
        
        {/* Lista de empresas */}
        <div className="base">
        {/* Campo de búsqueda */}
        <h3>Lista de Empresas</h3>
        <input
          type="text"
          placeholder="Buscar empresa..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
          <ul className="empresa-list">
            {filteredEmpresas.length > 0 ? (
              filteredEmpresas.map((empresa, index) => (
                <li key={index} className="empresa-item">
                  <p><strong>Nombre:</strong> {empresa.nombre}</p>
                  <p><strong>RUT:</strong> {empresa.rut}</p>
                </li>
              ))
            ) : (
              <p>No se encontraron empresas.</p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePage;
