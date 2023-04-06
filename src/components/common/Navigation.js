import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/styles/Navigation.module.css'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/auth">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
