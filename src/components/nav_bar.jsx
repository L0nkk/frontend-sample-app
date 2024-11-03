import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link'];
    if (isActive) classes.push('nav-bar__link--active');
    return classes.join(' ');
  };

  return (
    <nav className='nav-bar'>
      <NavLink className={navLinkClass} to='/practica'>
        <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 38L16 28L2 38V6C2 4.93913 2.42143 3.92172 3.17157 3.17157C3.92172 2.42143 4.93913 2 6 2H26C27.0609 2 28.0783 2.42143 28.8284 3.17157C29.5786 3.92172 30 4.93913 30 6V38Z" 
                stroke="#1E1E1E" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round"/>
        </svg>
        Practica
      </NavLink>
      <NavLink className={navLinkClass} to='/perfil'>
        <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 26C14 26 17 30 22 30C27 30 30 26 30 26M16 16H16.02M28 16H28.02M42 22C42 33.0457 33.0457 42 22 42C10.9543 42 2 33.0457 2 22C2 10.9543 10.9543 2 22 2C33.0457 2 42 10.9543 42 22Z" 
                stroke="#1E1E1E" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round"/>
        </svg>
        Mi perfil
      </NavLink>
      <NavLink className={navLinkClass} to='/empresas'>
        <svg width="40" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 28V2H2V28H32ZM32 28H46V18L40 12H32V28ZM16 33C16 35.7614 13.7614 38 11 38C8.23858 38 6 35.7614 6 33C6 30.2386 8.23858 28 11 28C13.7614 28 16 30.2386 16 33ZM42 33C42 35.7614 39.7614 38 37 38C34.2386 38 32 35.7614 32 33C32 30.2386 34.2386 28 37 28C39.7614 28 42 30.2386 42 33Z" 
                stroke="#1E1E1E" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round"/>
        </svg>
        Empresas
      </NavLink>
      <NavLink className={navLinkClass} to='/informacion'>
        <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2V8M30 2V8M18 40V46M30 40V46M40 18H46M40 28H46M2 18H8M2 28H8M12 8H36C38.2091 8 40 9.79086 40 12V36C40 38.2091 38.2091 40 36 40H12C9.79086 40 8 38.2091 8 36V12C8 9.79086 9.79086 8 12 8ZM18 18H30V30H18V18Z" 
                stroke="#1E1E1E" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round"/>
        </svg>
        Informacion
      </NavLink>
    </nav>
  );
};

export default NavBar;
