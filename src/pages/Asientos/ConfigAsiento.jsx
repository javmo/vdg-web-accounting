import { useState, useEffect} from 'react';
import useAsientos from '../../hooks/AsientoHooks';
import useAccounts from '../../hooks/CuentaHooks';
import './ConfigAsiento.css'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConfigAsiento = (props) => {

    console.log("wallet configurar Cuenta: " + props.wallet);
    const { addConfigAsiento, fetchData, asientos, isLoading, error} = useAsientos();
    const { getAccountByAddress} = useAccounts();
    const [accountResult, setAccountResult] = useState([]);
    
    const handleGetAccountAndEntry = async () => {
        const response = await getAccountByAddress(props.wallet);
        setAccountResult(response);
        
        console.log("respueta cuentassssss11!!!!!!!:", accountResult.contract);
        
    };

    useEffect(() => {
      fetchData();
      handleGetAccountAndEntry();
    }, []);

    useEffect(() => {
        if (accountResult) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            accountContract: accountResult.contract,
          }));
        }
      }, [accountResult])

    console.log("props.contract: " + props);
    //Se completa el formulario con datos segun el estado de los input
    const [formData, setFormData] = useState({
        configurationContract: '',
        accountContract: accountResult.contract,
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
        // if (event.target.name === "configurationContract") {
        //     const selectedAsiento = asientos.find((asiento) => asiento.contract === event.target.value);
        //     setFormData({ ...formData, [event.target.name]: event.target.value, accountContract: selectedAsiento ? selectedAsiento.contract : '' });
        //   } else {
        //     setFormData({ ...formData, [event.target.name]: event.target.value });
        //   }

          if (event.target.name === 'configurationContract') {
            setFormData({ ...formData, configurationContract: event.target.value });
          } else {
            setFormData({ ...formData, [event.target.name]: event.target.value });
        }
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