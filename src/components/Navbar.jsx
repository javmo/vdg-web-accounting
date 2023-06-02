import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Button from "./Button";
import WalletConnections from "../wallet/WalletConnection"
import Dropdown from "./Dropdown";
import DropdownAsientos from "./DropdownAsientos";
import logo4dinos from '../assets/images/dinos11.png'



function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownAsientos, setDropdownAsientos] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menu, setMenu] = useState(false)

  const toogleMenu = () => {
    setMenu(!menu)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000); // Define el ancho en el que consideras que es un dispositivo móvil
    };

    handleResize(); // Verificar el tamaño inicial de la pantalla

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <header className="Cabecera">
        <Link to="/" className="navbar-logo">
           <img src={logo4dinos} alt='Bienvenidos' className="navbar-src-logo"/>
        </Link>
        <button onClick={toogleMenu} className="navbar-button">
          <svg className="navbar-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
        
      
      <nav className={ `navbar ${menu ? 'isActive': ''}`}>
        
        <ul className="nav-items">


          {navItems.map((item) => {
            if (item.title === "Cuenta") {
              return (
                <li
                key={item.id}
                className={item.cName}
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
                >
                  
                  {/* <Link to={item.path}>{item.icon}</Link> */}
                  {isMobile ? (
                      // Mostrar el título en dispositivos móviles
                      <Link to={item.path} title="Configuracion de la cuenta">{item.title}</Link>
                    ) : (
                      // Mostrar el icono en pantallas más grandes
                      <Link to={item.path} title="Configuracion de la cuenta">{item.icon}</Link>
                    )}
                    
                    {dropdown && <Dropdown />}
                </li>
              );
            }
            if (item.title === "Asientos") {
              return (
                <li
                key={item.id}
                className={item.cName}
                onMouseEnter={() => setDropdownAsientos(true)}
                onMouseLeave={() => setDropdownAsientos(false)}
                >
                  {/* <Link to={item.path}>{item.icon}</Link> */}
                  {isMobile ? (
                      // Mostrar el título en dispositivos móviles
                      <Link to={item.path} title="Configuracion de los asientos" >{item.title}</Link>
                    ) : (
                      // Mostrar el icono en pantallas más grandes
                      <Link to={item.path} title="Configuracion de los asientos" >{item.icon}</Link>
                    )}
                  {dropdownAsientos && <DropdownAsientos />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
                {/* <li>
                  <div>
                    <WalletConnections/>
                  </div>
                </li> */}
         </ul>
       
        {/* <Button /> */}
       
      </nav>
      </header>
      
        {/* <Wallet/> */}
      
   </> 
    
  );
}

export default Navbar;