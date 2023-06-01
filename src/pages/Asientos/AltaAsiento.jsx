import { useState } from 'react';
import useAsientos from '../../hooks/AsientoHooks';
import './AltaAsiento.css'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AltaAsiento = (props) => {

    console.log("wallet configurar Cuenta: " + props.wallet);
    const { addNewAsiento, contract} = useAsientos();
    const navigate = useNavigate();


    //Se completa el formulario con datos segun el estado de los input
    const [formData, setFormData] = useState({
        description: '',
        owner: props.wallet,
    });
    
    //ejecucion de post
    const handleSubmit = async (event) => {
        
        try {  
            event.preventDefault();
            await addNewAsiento(formData);              

            toast.success('Nueva parametria creada');
             // Limpiar el campo de descripción
            setFormData({ ...formData, description: '' });

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
            setFormData({ ...formData, description:event.target.value });
        }
    };

    //////////////////////////////////////////
    return (

        <div className='div-form'>

            <h5>Nueva parametria contable</h5>
            <form className='form-box' onSubmit={handleSubmit}>

                <input  className='form-input'
                        type="text"
                        name="description"
                        placeholder="Description"
                        autoComplete="off"
                        value={formData.description}
                        onChange={handleChange}
                ></input>

                <input  className='form-input-owner'
                        type="text"
                        name="owner"
                        autoComplete="off"
                        value={props.wallet}
                        onChange={handleChange}
                ></input>
               
                <button className='form-button' type="submit" onClick={handleSubmit}>Guardar</button>

            </form>
            <div>
                <ToastContainer />
            </div>
        </div>
    )

}

export default AltaAsiento;