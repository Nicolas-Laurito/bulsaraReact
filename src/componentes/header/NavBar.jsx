import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {        
  return(
   
    
    <nav className="navegacion navbar-expand-sm navbar-light menu">
      <ul className="menu navbar-nav ">
        <Link className="nav-link" to='/'><li className="nav-item">Inicio</li></Link>
        <Link to='/QuienesSomos' className="nav-link"><li className="nav-item">Quienes Somos?</li></Link>
        <Link to='' className="nav-link">
        <li className="nav-item">Productos
          <ul className="subMenu ">
            <Link to='/categoria/Fertilizante' className="nav-link"><li>Fertilizantes</li></Link>
            <Link to='/categoria/Sustrato' className="nav-link"><li>Sustratos y complementos</li></Link>
            <Link to='/categoria/Otros' className="nav-link"><li>Otros</li></Link>
          </ul>
        </li>
        </Link>
        <Link to='/' className="nav-link"><li className="nav-item">Grow Tips</li></Link>
        <Link to='/form' className="nav-link"><li className="nav-item">Contacto</li></Link>
      </ul>
   </nav>
   
   
    );
}

export default NavBar;



