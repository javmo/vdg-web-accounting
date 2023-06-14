import React, { useState } from "react";
import { movimientosDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "./DropdownMovimientos.css";

function DropdownMovimientos() {
  const [dropdownMovimientos, setDropdownMovimientos] = useState(false);

  return (
    <>
      <ul
        className={dropdownMovimientos ? "movimientos-submenu clicked" : "movimientos-submenu"}
        onClick={() => setDropdownMovimientos(!dropdownMovimientos)}
      >
        {movimientosDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdownMovimientos(false)}
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

export default DropdownMovimientos;