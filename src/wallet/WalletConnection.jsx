import React, { useEffect, useState } from 'react';
import './WalletConnection.css';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Toaster, toast } from 'react-hot-toast';
import * as Icons from "react-icons/fa";
import { ethers } from "ethers";
import { useNavigate } from 'react-router-dom';
import TextSnippet from '../components/TextSnippet';


const WalletConnection = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  const firstChars = 4;
  const lastChars = 4;
  
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", accountsChanged);
      window.ethereum.on("chainChanged", chainChanged);
     
    }
  }, []);

  const connectHandler = async () => {
    console.log("entro")
    if (window.ethereum) {
      try {
    
        console.log("entro1")
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        await accountsChanged(res[0]);
        console.log("entro3")
            
      } catch (err) {
        console.error(err);
        setErrorMessage("There was a problem connecting to MetaMask");
           
      }
    } else {
      setErrorMessage("Install MetaMask");
      console.log("boton presionado2");
     
    }
  };

  const accountsChanged = async (newAccount) => {
    setAccount(newAccount);

    try {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [newAccount.toString(), "latest"],
      });
      setBalance(ethers.formatEther(balance));
    
    } catch (err) {
      console.error(err);
      setErrorMessage("There was a problem connecting to MetaMask");
    }
  };
  
  const chainChanged = () => {
    setErrorMessage(null);
    setAccount(null);
    setBalance(null);
   
  };

  return (
    <div className='div-wallet'>
    
      {(account && account!=="" && account!==null) && (
     
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
      
      {account===null && (
         
         <div>
            <button className='btn-wallet' onClick={connectHandler}>Conectar Wallet</button>
         </div>
      )}

       

    </div>
    
  );
}

export default WalletConnection;
