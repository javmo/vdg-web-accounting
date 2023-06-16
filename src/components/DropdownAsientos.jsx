import React, { useState } from "react";
import { asientosDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "./DropdownAsientos.css";

function DropdownAientos({toogleMenu}) {
  const [dropdownAientos, setDropdownAsientos] = useState(false);

  return (
    <>
      <ul
        className={dropdownAientos ? "asientos-submenu clicked" : "asientos-submenu"}
        onClick={() => setDropdownAsientos(!dropdownAientos)}
      >
        {asientosDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => {
                  toogleMenu();
                  setDropdownAsientos(false)
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

export default DropdownAientos;