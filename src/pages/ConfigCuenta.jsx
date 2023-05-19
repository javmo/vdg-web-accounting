import { useState, useEffect} from 'react';
import useAccounts from '../hooks/CuentaHooks';
import './ConfigCuenta.css'
import SuccesMessageTxData from '../modals/SuccesMessageTxData';
import Checkbox from '../components/Checkbox1';
import { useWeb3 } from '../hooks/useWeb3';
import { useNavigate } from 'react-router-dom';


const CrearCuenta = () => {
    const navigate = useNavigate();

    //Se obtiene el address    
    const { connectWallet, account, balance} = useWeb3();
    const handleConnectWallet = async () => {
      await connectWallet();
    };
    useEffect(() => {
        const obtenerCuenta = async () => {
            handleConnectWallet();         
        };
        obtenerCuenta();
    }, []);
 
   
    
    
    //Se completa el formulario con datos segun el estado de los input
    const [formData, setFormData] = useState({
        name: '',
        owner: account,
    });
    
    
    //Obtencion de check seleccionado
    const [activos, setActivos] = useState(false);
    const [pasivos, setPasivos] = useState(false);
    const [resultado, setResultado] = useState(false);
    const handleCheckboxChange = (checkboxName, isChecked) => {
        console.log(`Checkbox "${checkboxName}" está seleccionado: ${isChecked}`);
        
        if (checkboxName === 'Activos' && isChecked) {    
            setActivos(true);
            setPasivos(false);
            setResultado(false);
        }else{
            if (checkboxName === 'Pasivos' && isChecked) {    
                setActivos(false);
                setPasivos(true);
                setResultado(false);
            }else{
                setActivos(false);
                setPasivos(false);
                setResultado(true);
            }
        }
        
    };
    
    //ejecucion de post correcto
    const { addAssetAccount } = useAccounts();
    const { addLiabilityAccount } = useAccounts();
    const { addResultAccount } = useAccounts();
    const handleSubmit = async (event) => {
        
        if(activos){
            console.log("2");
            event.preventDefault();
            const result = await addAssetAccount(formData);
            setSuccessMessage(result);
        }else{
            if(pasivos){
                console.log("3");
                event.preventDefault();
                const result = await addLiabilityAccount(formData);
                setSuccessMessage(result);
            }else{
                console.log("4");    
                event.preventDefault();
                const result = await addResultAccount(formData);
                setSuccessMessage(result);
            }
        };
    };

    useEffect(() => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          owner: account,
        }));
      }, [account]);
    
    //obtengo cambios en el formulario
    const handleChange = (event) => {
        //setFormData({ ...formData, [event.target.name]: event.target.value });
        if (event.target.name === 'owner') {
            setFormData({ ...formData, owner: event.target.value });
          } else {
            setFormData({ ...formData, [event.target.name]: event.target.value });
          }
    };
    
    //mensaje de exito
    const [successMessage, setSuccessMessage] = useState(null);
   
    //////////////////////////////////////////
    return (

        <div className='div-form'>

            <h5>Setear nombre y tipo de la cuenta</h5>
            <form className='form-box' onSubmit={handleSubmit}>

                <input  className='form-input'
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        autoComplete="off"
                        value={formData.name}
                        onChange={handleChange}
                ></input>

                <input  className='form-input-owner'
                        type="text"
                        name="owner"
                        autoComplete="off"
                        value={account}
                        onChange={handleChange}
                ></input>
            

                <Checkbox handleCheckboxChange={handleCheckboxChange}/>     
                

                <button className='form-button' type="submit" onClick={handleSubmit}>Guardar</button>

            </form>
        
        <SuccesMessageTxData successMessage={successMessage} />
        </div>
    )

}

export default CrearCuenta;