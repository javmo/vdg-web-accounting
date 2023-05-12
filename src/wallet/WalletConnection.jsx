import React, { useEffect, useState } from 'react';
import { useWeb3 } from '../hooks/useWeb3';
import { Link } from "react-router-dom";
import './WalletConnection.css';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Toaster, toast } from 'react-hot-toast';
import * as Icons from "react-icons/fa";

const WalletConnection = () => {
  const { connectWallet, account, balance} = useWeb3();
  
  const handleConnectWallet = async () => {
    await connectWallet();
  };
 
  return (
    <div className='div-wallet'>
      {account && (
      <div>
      <div className='div-wallet-info'>
        
        <span className='div-wallet-info-p'>Wallet: {account}</span>

        <CopyToClipboard text={account}>
            <button  className='btn-wallet-copy' title='Copy' onClick={() => toast("Address copiada", {position: 'botton-right'})}>
              <Icons.FaRegCopy /> 
            </button>
        </CopyToClipboard>
        
        <span className='div-wallet-info-p'>Balance: {balance} ETH</span>


      </div>
      <div className='div-wallet-info'>
        <button className='btn-wallet' onClick={handleConnectWallet}>Cambiar de cuenta</button>
      </div>
      </div>
      )}
      
      <Toaster/>

      {!account && (
      <button className='btn-wallet' onClick={handleConnectWallet}>Conectar Wallet</button>
      )}  
    </div>
    
  );
}

export default WalletConnection;
