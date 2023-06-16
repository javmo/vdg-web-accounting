import React, { useState } from "react";
import { cuentasDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown({toogleMenu}) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "cuentas-submenu clicked" : "cuentas-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {cuentasDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => {
                  toogleMenu();
                  setDropdown(false)
                }}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;