import { useState, useEffect } from 'react';

import './Checkbox1.css';

const Checkbox1 = ({ handleCheckboxChange}) => {
  const [isCheckedActivos, setIsCheckedActivos] = useState(false);
  const [isCheckedPasivos, setIsCheckedPasivos] = useState(false);
  const [isCheckedResultado, setIsCheckedResultado] = useState(false);

  const handleCheckboxChangeActivos = (event) => {
    setIsCheckedActivos(event.target.checked);
    setIsCheckedPasivos(false);
    setIsCheckedResultado(false);
    handleCheckboxChange("Activos", event.target.checked);
  }
  const handleCheckboxChangePasivos = (event) => {
    setIsCheckedActivos(false);
    setIsCheckedPasivos(event.target.checked);
    setIsCheckedResultado(false);
    handleCheckboxChange("Pasivos", event.target.checked);
  }
  const handleCheckboxChangeResultado = (event) => {
    setIsCheckedActivos(false);
    setIsCheckedPasivos(false);
    setIsCheckedResultado(event.target.checked);
    handleCheckboxChange("Resultado", event.target.checked);
  }

    return(  
        <form className='checkbox-form'> 
            <label className="checkbox-label">
                <input
                    name="pasivos"
                    type="checkbox"
                    checked={isCheckedPasivos}
                    onChange={handleCheckboxChangePasivos}
                    className="checkbox-input"
                ></input>
                <span className="checkmark"></span>
                Pasivos
            </label>
            <label className="checkbox-label">
                <input
                    name="activos"
                    type="checkbox"
                    checked={isCheckedActivos}
                    onChange={handleCheckboxChangeActivos}
                    className="checkbox-input"
                ></input>
                <span className="checkmark"></span>
                Activos
            </label>
            <label className="checkbox-label">
                <input
                    name="resultado"
                    type="checkbox"
                    checked={isCheckedResultado}
                    onChange={handleCheckboxChangeResultado}
                    className="checkbox-input"
                ></input>
                <span className="checkmark"></span>
                Resultado
            </label>
        </form>
            );
        
}

export default Checkbox1;