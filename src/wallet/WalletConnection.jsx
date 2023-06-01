import React, { useEffect, useState } from 'react';
import './WalletConnection.css';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Toaster, toast } from 'react-hot-toast';
import * as Icons from "react-icons/fa";
import { useEther } from "../hooks/useEther";


const WalletConnection = (props) => {
  
  const { checkMetaMaskConnection, connectHandler, account, balance, conectado} = useEther();
  const [displayedAccount, setDisplayedAccount] = useState('');

  const [wallet, setWallet] = useState('');
  // Función para actualizar la wallet
  const handleWalletChange = (newWallet) => {
    setWallet(newWallet);
  };


  useEffect(() => {
    checkMetaMaskConnection();   
    props.onWalletChange(account);
  }, [account, props.onAccountChange]);

  return (
    <div className='div-wallet'>
    
      {(conectado) && (
     
      <div className='div-wallet-info'>
        
        <div className='div-wallet-copy'>
          <span className='div-wallet-info-p'>
            Wallet: <span className='wallet-account'>{account}</span>
          </span>

          <CopyToClipboard text={account}>
              <button  className='btn-wallet-copy' title='Copy' onClick={() => toast("Address copiada", {position: 'botton-right'})}>
                <Icons.FaRegCopy /> 
              </button>
          </CopyToClipboard>
        </div>
        
        <div className='balance-wrapper'>
          <span className='balance-label'>Balance:</span>
          <span className='balance-value'>{balance} ETH</span>
        </div>

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
