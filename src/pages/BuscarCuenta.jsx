import React, { useEffect, useState } from 'react';
import useAccounts from '../hooks/CuentaHooks';
import { useWeb3 } from '../hooks/useWeb3';
import './BuscarCuenta.css';


const BuscarCuenta= (props) => {

  console.log("wallet buscar Cuenta: " + props.wallet);

  //Se busca los datos de la cuenta por address 
  const { getAccountByAddress, name, balance, type, selectAccount, contract, isLoading, error } = useAccounts();
  const handleGetAccountByAddress = async () => {
    await getAccountByAddress(props.wallet);
  };
  
  useEffect(() => {
    const obtenerCuenta = async () => {
      await handleGetAccountByAddress(props.wallet);
    };
    obtenerCuenta();
  }, [props.wallet]);

  
  // if (isLoading) {
  //   return <p>Cargando...</p>;
  // }
  if (error) {
    return <p>Error al cargar las cuentas: {error.message}</p>;
  }

  return (

    <div className='div-form'>

        <h5>Detalles de la wallet</h5>

        <form className='form-box'>
          <div className="form-item">
            <span className="form-label">Nombre:</span>
            <input  className='form-input'
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={name}
            ></input>
          </div>
          <div className="form-item">
            <span className="form-label">Balance:</span>
            <input  className='form-input'
                    type="text"
                    name="balance"
                    placeholder="balance"
                    autoComplete="off"
                    value={balance}
            ></input>
          </div>
          <div className="form-item">
            <span className="form-label">Tipo:</span>
            <input  className='form-input'
                    type="text"
                    name="type"
                    placeholder="Tipo"
                    autoComplete="off"
                    value={type}
            ></input>
          </div>
          <div className="form-item">
            <span className="form-label">Cuenta:</span>
            <input  className='form-input'
                    type="text"
                    name="selectAccount"
                    placeholder="Cuenta"
                    autoComplete="off"
                    value={selectAccount}
            ></input>
          </div>
          <div className="form-item">
            <span className="form-label">Contrato:</span>
            <input  className='form-input'
                    type="text"
                    name="contract"
                    placeholder="Contrato"
                    autoComplete="off"
                    value={contract}
            ></input>
          </div>
        
        </form>
    
    </div>
)

};

export default BuscarCuenta;
