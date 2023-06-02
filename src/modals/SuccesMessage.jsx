import React, { useState } from 'react';
import './SuccesMessage.css';

const SuccessModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content success">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Operación exitosa</h2>
        <p>Tu operación se ha completado correctamente.</p>
      </div>
    </div>
  );
};

export default SuccessModal;