import { useState } from 'react';
import useAccounts from '../hooks/CuentaHooks';
import './CrearCuenta.css'
import SuccesMessageTxData from '../modals/SuccesMessageTxData';
import Checkbox from '../components/Checkbox1';



const CrearCuenta = () => {

    const { addAccount } = useAccounts();
    const [formData, setFormData] = useState({
        name: '',
        owner: '',
    });

    const [successMessage, setSuccessMessage] = useState(null);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await addAccount(formData);
        setSuccessMessage(result);
      
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    
    return (
        <div className='div-form'>
            <h1>Nueva cuenta contable</h1>
        <form className='form-box' onSubmit={handleSubmit}>

            <input  className='form-input'
                    type="text"
                    name="name"
                    placeholder="name"
                    autoComplete="off"
                    value={formData.nombre}
                    onChange={handleChange}
            ></input>
            <input  className='form-input'
                    type="text"
                    name="owner"
                    placeholder="Owner"
                    autoComplete="off"
                    value={formData.owner}
                    onChange={handleChange}
            ></input>
           
            <Checkbox/>

            <button className='form-button' type="submit">Alta de cuenta</button>

        </form>
        
           
        <SuccesMessageTxData successMessage={successMessage} />
        </div>
    )

}

export default CrearCuenta;