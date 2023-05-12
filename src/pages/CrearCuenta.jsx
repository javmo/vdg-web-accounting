import { useState, useEffect } from 'react';
import useAccounts from '../hooks/CuentaHooks';
import './CrearCuenta.css'
import SuccesMessageTxData from '../modals/SuccesMessageTxData';
import Checkbox from '../components/Checkbox1';
import Web3 from 'web3';
import { useWeb3 } from '../hooks/useWeb3';



const CrearCuenta = () => {
    
    const { connectWallet, account, balance} = useWeb3();

    const handleConnectWallet = async () => {
      await connectWallet();
    };
 
    

    const [formData, setFormData] = useState({
        name: '',
        owner: '',
    });

   
    useEffect(() => {
        const obtenerCuenta = async () => {
            handleConnectWallet();
            console.log("cuenta:" + await handleConnectWallet())
           
        };

        obtenerCuenta();
    }, []);


    const { addAccount } = useAccounts();

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
                    defaultValue="account"
            ></input>

            <Checkbox/>     
            

            <button className='form-button' type="submit">Alta de cuenta</button>

        </form>
        
           
        <SuccesMessageTxData successMessage={successMessage} />
        </div>
    )

}

export default CrearCuenta;