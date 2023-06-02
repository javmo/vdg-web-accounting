import React, { useEffect, useState } from 'react';
import useAccounts from '../hooks/CuentaHooks';
import { useNavigate } from 'react-router-dom';
import './BuscarCuenta.css';


const Cuenta= (props) => {

  console.log("wallet cuenta: " + props.wallet);
  const navigate = useNavigate();
  //Se busca los datos dela cuenta por address 
  const { getAccountByAddress, name, balance, type, selectAccount, contract, isLoading, error } = useAccounts();
  const handleGetAccountByAddress = async () => {
    await getAccountByAddress(props.wallet);
  };
  
  useEffect(() => {
    const obtenerCuenta = async () => {
    //const response = await handleGetAccountByAddress(props.wallet);

    try {  
        await handleGetAccountByAddress(props.wallet);
        navigate('/BuscarCuenta');
    } catch (error) {
        navigate('/ConfigCuenta');
    }
    
    };
    obtenerCuenta();
  }, [props.wallet ]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  return null;

};

export default Cuenta;
