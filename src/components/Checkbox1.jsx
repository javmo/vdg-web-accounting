import { useState, useEffect } from 'react';

import './Checkbox1.css';

const Checkbox1 = ({ handleCheckboxChange}) => {
  const [isCheckedActivos, setIsCheckedActivos] = useState(false);
  const [isCheckedPasivos, setIsCheckedPasivos] = useState(false);
  const [isCheckedResultado, setIsCheckedResultado] = useState(false);
  const [isCheckedBeneficio, setIsCheckedBeneficio] = useState(false);
  const [isCheckedGasto, setIsCheckedGasto] = useState(false);

  const handleCheckboxChangeActivos = (event) => {
    setIsCheckedActivos(event.target.checked);
    setIsCheckedPasivos(false);
    setIsCheckedResultado(false);
    setIsCheckedBeneficio(false);
    setIsCheckedGasto(false);
    handleCheckboxChange("Activos", event.target.checked);
  }
  const handleCheckboxChangePasivos = (event) => {
    setIsCheckedActivos(false);
    setIsCheckedPasivos(event.target.checked);
    setIsCheckedResultado(false);
    setIsCheckedBeneficio(false);
    setIsCheckedGasto(false);
    handleCheckboxChange("Pasivos", event.target.checked);
  }
  const handleCheckboxChangeResultado = (event) => {
    setIsCheckedActivos(false);
    setIsCheckedPasivos(false);
    setIsCheckedResultado(event.target.checked);
    handleCheckboxChange("Resultado", event.target.checked);
  }

  const handleCheckboxChangeBeneficio = (event) => {
    setIsCheckedActivos(false);
    setIsCheckedPasivos(false);
    setIsCheckedGasto(false);
    setIsCheckedResultado(event.target.checked);
    setIsCheckedBeneficio(event.target.checked);
    handleCheckboxChange("Resultado", event.target.checked);
  }

  const handleCheckboxChangeGasto = (event) => {
    setIsCheckedActivos(false);
    setIsCheckedPasivos(false);
    setIsCheckedBeneficio(false);
    setIsCheckedResultado(event.target.checked);
    setIsCheckedGasto(event.target.checked);
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
            <div>
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
            {isCheckedResultado && (
              <div>
                <label className="checkbox-label">
                    <input
                        name="Beneficio"
                        type="checkbox"
                        checked={isCheckedBeneficio}
                        onChange={handleCheckboxChangeBeneficio}
                        className="checkbox-input"
                    ></input>
                    <span className="checkmark"></span>
                    Beneficio
                </label>
                <label className="checkbox-label">
                    <input
                        name="Gasto"
                        type="checkbox"
                        checked={isCheckedGasto}
                        onChange={handleCheckboxChangeGasto}
                        className="checkbox-input"
                    ></input>
                    <span className="checkmark"></span>
                    Gasto
                </label>
              </div>
            )}
            </div>
        </form>
            );
        
}

export default Checkbox1;