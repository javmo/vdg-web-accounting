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
    if (web3) return;
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0]);
    updateBalance(accounts[0]);
  };

  const updateBalance = async (address) => {
    if (!web3) return;
    const balanceWei = await web3.eth.getBalance(address);
    const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
    setBalance(balanceEth);
  };
  
  return {
    connectWallet,
    account,
    balance
  };
};
