import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

import NavBar from '../components/nav_bar';

ChartJS.register(ArcElement, Tooltip, Legend);

export const HomePage = () => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate('/inicio'); // Navegar a la ruta "/inicio" al hacer clic en "Practica DI"
  };

  // Datos del gráfico de lenguajes de programación
  const data = {
    labels: ['JavaScript', 'Python', 'Java', 'C#', 'Ruby'],
    datasets: [
      {
        label: 'Popularidad de Lenguajes de Programación',
        data: [35, 25, 20, 10, 10], // Datos de ejemplo
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
      },
    ],
  };

  return (
    <>
      <NavBar />
      <div className="login-container">
        <h1 onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
          Practica DI
        </h1>
        <p>Universidad Tecnico Federico Santa Maria</p>
        <div className="base">
          <h3>Información Estadística</h3>
          <p>Esta sección muestra algunos datos estadísticos sobre las empresas participantes.</p>
          <h4>Popularidad de Lenguajes de Programación</h4>
          <Pie data={data} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
