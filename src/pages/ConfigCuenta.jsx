import { useState, useEffect} from 'react';
import useAccounts from '../hooks/CuentaHooks';
import './ConfigCuenta.css'
import Checkbox from '../components/Checkbox1';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { faL } from '@fortawesome/free-solid-svg-icons';

const CrearCuenta = (props) => {

    console.log("wallet configurar Cuenta: " + props.wallet);
    const { addAssetAccount, addLiabilityAccount, addResultAccount, isLoading, error} = useAccounts();
    const [activos, setActivos] = useState(false);
    const [pasivos, setPasivos] = useState(false);
    const [resultado, setResultado] = useState(false);
    const [beneficio, setBeneficio] = useState(false);
    const [gasto, setGasto] = useState(false);
    const navigate = useNavigate();


    //Se completa el formulario con datos segun el estado de los input
    const [formData, setFormData] = useState({
        name: '',
        owner: props.wallet,
        isExpense: false,
    });

    //Obtencion de check seleccionado

    const handleCheckboxChange = (checkboxName, isChecked) => {
        if (checkboxName === 'Activos' && isChecked) {
          setActivos(true);
          setPasivos(false);
          setResultado(false);
          setBeneficio(false);
          setGasto(false);
          setFormData({ ...formData, isExpense: false });
        } else if (checkboxName === 'Pasivos' && isChecked) {
          setActivos(false);
          setPasivos(true);
          setResultado(false);
          setBeneficio(false);
          setGasto(false);
          setFormData({ ...formData, isExpense: false });
        } else if (checkboxName === 'Resultado' && isChecked) {
          setActivos(false);
          setPasivos(false);
          setResultado(true);
            if(checkboxName ==='Beneficio' && isChecked){
                setBeneficio(true);
                setGasto(false);
                setFormData({ ...formData, isExpense: false });
            }else if(checkboxName ==='Gasto' && isChecked){
                setGasto(true);
                setBeneficio(false);
                setFormData({ ...formData, isExpense: true });
            }
        } else {
          setActivos(false);
          setPasivos(false);
          setResultado(false);
          setBeneficio(false);
          setGasto(false);
          setFormData({ ...formData, isExpense: false });
        }
    };
    
    //ejecucion de post correcto
    
    const handleSubmit = async (event) => {
        
        try {  
            if(activos){
                console.log("activos aaaaaaaaaaaaaaaa")
                event.preventDefault();
                await addAssetAccount(formData);               
            }else if(pasivos){
                    console.log("pasivos aaaaaaaaaaaaaaa")
                    event.preventDefault();
                    await addLiabilityAccount(formData);               
            }else{ 
                console.log("resultado aaaaaaaaaaaaaaaa")
                event.preventDefault();
                await addResultAccount(formData);
            }

            toast.success('Operación exitosa');
            navigate('/BuscarCuenta');

        } catch (error) {
            toast.error(error.message);
            console.log("error result: ", error);
        }
    };
      
    //obtengo cambios en el formulario
    const handleChange = (event) => {
        //setFormData({ ...formData, [event.target.name]: event.target.value });
        if (event.target.name === 'owner') {
            setFormData({ ...formData, owner: event.target.value });
          } else {
            setFormData({ ...formData, [event.target.name]: event.target.value });
        }
    };

    //////////////////////////////////////////
    return (

        <div className='div-form'>

            <h5>Configurar wallet</h5>
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
                        value={props.wallet}
                        onChange={handleChange}
                ></input>
            

                <Checkbox handleCheckboxChange={handleCheckboxChange}/>     
                

                <button className='form-button' type="submit" onClick={handleSubmit}>Guardar</button>

            </form>
            <div>
                <ToastContainer />
            </div>
        </div>
    )

}

export default CrearCuenta;