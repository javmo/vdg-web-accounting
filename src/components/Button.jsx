import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button() {
  return (
    <Link to="signup">
      <button className="btn">Registrarse</button>
    </Link>
    
  );
}

export default Button;