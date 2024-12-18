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
import PracticaConvalidar from '../pages/PracticaConvalidar';
import PracticaInscribir from '../pages/practica_inscribir';
import PracticaRegistarda from '../pages/practica_registrada';

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<HomePage />} />
            <Route path='/inicio/:completed' element={<Inicio />} />
            <Route path='/perfil' element={<Perfil />} />
            <Route path="/practica/:completed" element={<Practica />} />
            <Route path='/practica_industrial' element={<PracticaIndustrial />} /> {/* New route */}
            <Route path="/practica_profesional/:completed" element={<PracticaProfesional />} /> {/* New route */}
            <Route path='/empresas' element={<Empresas />} />
            <Route path='/informacion' element={<Informacion />} />
            <Route path='/practica_convalidar' element={ <PracticaConvalidar/>}/> {/* New route */}
            <Route path='/practica_inscribir' element={ <PracticaInscribir/>}/> {/* New route */}
            <Route path='/practica_registrada' element={ <PracticaRegistarda />}/>
            <Route path='*' element={<h2>Page Not Found</h2>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
