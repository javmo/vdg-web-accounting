import { useState } from 'react'
import './Cabecera.css'
import { Outlet, Link } from 'react-router-dom';


const Cabecera = () => {
  
  const [menu, setMenu] = useState(false)

  const toogleMenu = () => {
    setMenu(!menu)
  }


  return (
    
    <header className="Cabecera">
      <h1 className="Cabecera-h1">
        <a href='#' className="Cabecera.a">
          4Dinos
        </a>
      </h1>
      
      <button onClick={toogleMenu} className="Cabecera-button">
        <svg className="Cabecera-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>

      <nav className={ `Cabecera-nav ${menu ? 'isActive': ''}`}>
        <ul className="Cabecera-ul">
          <li className="Cabecera-li ">
            <Link to="/CrearCuenta">Crear Cuenta</Link>
          </li>
          <li className="Cabecera-li ">
            <Link to="/BuscarCuenta">Buscar Cuenta</Link>
          </li>
          <li className="Cabecera-li ">
            <Link to="/ListaCuentas">Listar Cuentas</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  )
};

export default Cabecera;
