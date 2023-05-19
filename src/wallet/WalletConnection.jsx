import React, { useEffect, useState } from 'react';
import './WalletConnection.css';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Toaster, toast } from 'react-hot-toast';
import * as Icons from "react-icons/fa";
import { useEther } from "../hooks/useEther";


const WalletConnection = () => {
  
  const { checkMetaMaskConnection, connectHandler, account, balance, conectado} = useEther();
  
  const handleConnectWallet = async () => {
    await connectHandler();
  };

     
  useEffect(() => {
      const obtenerCuenta = async () => {
          handleConnectWallet();         
      };
      obtenerCuenta();
  }, []);

  useEffect(() => {
    checkMetaMaskConnection();       
    
    }, []);

  return (
    <div className='div-wallet'>
    
      {(conectado) && (
     
      <div className='div-wallet-info'>
        
        <span className='div-wallet-info-p'>Wallat: {account}</span>

        <CopyToClipboard text={account}>
            <button  className='btn-wallet-copy' title='Copy' onClick={() => toast("Address copiada", {position: 'botton-right'})}>
              <Icons.FaRegCopy /> 
            </button>
        </CopyToClipboard>
         
        <span className='div-wallet-info-p'>Balance: {balance} ETH</span>

      </div>
      )}
      
      <Toaster/>
      
      {!conectado && (
         
         <div>
            <button className='btn-wallet' onClick={connectHandler}>Conectar Wallet</button>
         </div>
      )}

       

    </div>
    
  );
}

export default WalletConnection;
