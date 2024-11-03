import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from '../pages/inicio';
import HomePage from '../pages/home_page';
import Perfil from '../pages/perfil';
import Practica from '../pages/practica';
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
            <Route path='/inicio' element={<Inicio />} />
            <Route path='/perfil' element={<Perfil />} />
            <Route path='/practica' element={<Practica />} />
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
