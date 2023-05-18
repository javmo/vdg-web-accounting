import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Button from "./Button";
import Wallet from "../pages/Wallet"
import Dropdown from "./Dropdown";
import DropdownAsientos from "./DropdownAsientos";



function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownAsientos, setDropdownAsientos] = useState(false);

  const [menu, setMenu] = useState(false)

  const toogleMenu = () => {
    setMenu(!menu)
  }

  return (
    <>
    <header className="Cabecera">
        <Link to="/" className="navbar-logo">
          4Dinos
          <Icons.FaMandalorian />
        </Link>
        <button onClick={toogleMenu} className="navbar-button">
          <svg className="navbar-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
        <Wallet />
      
      <nav className={ `navbar ${menu ? 'isActive': ''}`}>
        
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Cuentas") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
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
                  <Link to={item.path}>{item.title}</Link>
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
         {/* <li className="nav-item-wallet">
            <Wallet />
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