import React from 'react'
import { createRoot } from 'react-dom/client';

import Layout from './components/layout'

import './stylesheets/index.scss'
import './stylesheets/Login.scss'
import './stylesheets/inscripcion.scss'
import './stylesheets/main-container.scss'
import './stylesheets/inscripcion-completa.scss'
import './stylesheets/resumen-container.scss'
import './stylesheets/bitacora.scss'

document.body.innerHTML = '<div id="root"></div>';
const root = createRoot(document.getElementById('root'));
root.render(<Layout />);
