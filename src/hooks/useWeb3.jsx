// src/hooks/useWeb3.js
import { useState, useEffect } from 'react';
import Web3 from 'web3';

export const useWeb3 = () => {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      setWeb3(new Web3(window.ethereum));
    }
  }, []);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Solicita el acceso a Metamask
        await window.ethereum.request({ method: 'eth_requestAccounts' });
  
        // Crea una instancia de Web3.js
        const web3 = new Web3(window.ethereum);
  
        // Obtiene la dirección de la cuenta del usuario
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        
        setAccount(accounts[0]);
        updateBalance(accounts[0]);

        console.log(`Conectado a Metamask con dirección: ${account}`);
  
        // Retorna la instancia de Web3.js
        return web3;
      } catch (error) {
        console.error('Error al conectar con Metamask:', error);
      }
    } else {
      console.error('Metamask no detectado');
    }
    
    
  };


  async function changeAccount () {
    // await disconecAccount();
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const accounts = await web3.eth.getAccounts();
    //const account = accounts[0];
    
    setAccount(accounts[0]);
    updateBalance(accounts[0]);

  }


  const updateBalance = async (address) => {
    if (!web3) return;
    const balanceWei = await web3.eth.getBalance(address);
    const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
    setBalance(balanceEth);
  };
  
  return {
    connectWallet,
    changeAccount,
    account,
    balance
  };
};
