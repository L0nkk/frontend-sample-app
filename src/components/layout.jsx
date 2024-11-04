import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from '../pages/inicio';
import HomePage from '../pages/home_page';
import Perfil from '../pages/perfil';
import Practica from '../pages/practica';
import PracticaProfesional from '../pages/practica_profesional'; // Import the new page
import PracticaIndustrial from '../pages/practica_industrial'; // Import the new page
import Empresas from '../pages/empresas';
import Informacion from '../pages/informacion';

import NavBar from '../components/nav_bar';

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<HomePage />} />
            <Route path='/inicio' element={<Inicio />} />
            <Route path='/perfil' element={<Perfil />} />
            <Route path='/practica' element={<Practica />} />
            <Route path='/practica_industrial' element={<PracticaIndustrial />} /> {/* New route */}
            <Route path='/practica_profesional' element={<PracticaProfesional />} /> {/* New route */}
            <Route path='/empresas' element={<Empresas />} />
            <Route path='/informacion' element={<Informacion />} />
            <Route path='*' element={<h2>Page Not Found</h2>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
