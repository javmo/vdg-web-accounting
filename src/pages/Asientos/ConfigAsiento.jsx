import { useState, useEffect} from 'react';
import useAsientos from '../../hooks/AsientoHooks';
import './ConfigAsiento.css'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConfigAsiento = (props) => {

    console.log("wallet configurar Cuenta: " + props.wallet);
    const { addConfigAsiento, fetchData, asientos, isLoading, error} = useAsientos();
    const navigate = useNavigate();

    useEffect(() => {
      fetchData();
      console.log("asientos: " + asientos)
    }, []);


    //Se completa el formulario con datos segun el estado de los input
    const [formData, setFormData] = useState({
        configurationContract: '',
        accountContract: props.wallet,
        isCredit: false,
        owner: props.wallet,
    });
    
    //ejecucion de post
    const handleSubmit = async (event) => {
        
        try {  
            event.preventDefault();
            await addConfigAsiento(formData);              

            toast.success('Operación exitosa');
            
        } catch (error) {
            toast.error(error.message);
            console.log("error result: ", error);
        }
    };
      
    //obtengo cambios en el formulario
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };

    //////////////////////////////////////////
    return (

        <div className='div-form'>

            <h5>Configuracion de asiento</h5>
            <form className='form-box' onSubmit={handleSubmit}>
            <div className="form-item">
                <span className="form-label">Asiento:</span>
                <select  className='form-input custom-select'
                        name="configurationContract"
                        value={formData.configurationContract}
                        onChange={handleChange}
                >
                   <option value="">Seleccione una opción</option>
                    {asientos && asientos.map((asiento) => (
                      <option key={asiento.id} value={asiento.contract}>
                        {asiento.description}
                      </option>
                    ))}
                </select>
            </div>
            <div className="form-item">
                <span className="form-label">Tipo:</span>
                <select  className='form-input custom-select'
                        name="isCredit"
                        value={formData.isCredit}
                        onChange={handleChange}
                >
                    <option value="">Seleccione una opción</option>
                    <option value='false'>Debito</option>
                    <option value='true'>Credito</option>
        
                </select>
            </div>
               
                <button className='form-button' type="submit" onClick={handleSubmit}>Guardar</button>

            </form>
            <div>
                <ToastContainer />
            </div>
        </div>
    )

}

export default ConfigAsiento;