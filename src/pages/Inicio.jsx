import React from 'react';
import './Inicio.css';
import bienvenidosGif from '../assets/images/Bienvenidos2.gif';

const Inicio = () => {
  return (
      <div className='div-inicio'>
        <h1 className='bienvenidos'>Bienvenidos</h1>
        <img src={bienvenidosGif} alt="Bienvenidos" className='bienvenidos-gif'/>
      </div>

  );
}

export default Inicio;
