import { useState } from 'react';
import { Checkbox, Radio, Switch } from 'pretty-checkbox-react';
import './Checkbox1.css';

function Checkbox1(){   
  const [isCheckedActivos, setIsCheckedActivos] = useState(false);
  const [isCheckedPasivos, setIsCheckedPasivos] = useState(false);
  const [isCheckedResultado, setIsCheckedResultado] = useState(false);

  const handleCheckboxChangeActivos = (event) => {
    setIsCheckedActivos(event.target.checked);
  }
  const handleCheckboxChangePasivos = (event) => {
    setIsCheckedPasivos(event.target.checked);
  }
  const handleCheckboxChangeResultado = (event) => {
    setIsCheckedResultado(event.target.checked);
  }

    return(  
        <form className='checkbox-form'> 
            <label className="checkbox-label">
                <input
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