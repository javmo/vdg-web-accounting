import { useState, useEffect } from 'react';
import { ethers } from "ethers";

export const useEther = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [account, setAccount] = useState(null);
    const [balance, setBalance] = useState(null);
    const [conectado, setConectado] = useState(false);
    
        
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
            setConectado(true);
                
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
        setAccount(null);
        setBalance(null);
    
    };


    const checkMetaMaskConnection  = async () => {
        const { ethereum } = window;
        console.log(1)
        if (!ethereum) {
            console.log("Make sure you have MetaMask!");
            
        } else {
            const accounts = await ethereum.request({ method: "eth_accounts" });
            console.log(2)
            if (accounts.length !== 0) {
                const account = accounts[0];
                console.log("Found an authorized account:", account);
                setAccount(account);
                
                const balance = await window.ethereum.request({
                    method: "eth_getBalance",
                    params: [account.toString(), "latest"],
                });
                console.log("balance: " + balance )
                setBalance(ethers.formatEther(balance));
                
                setConectado(true);


            } else {
                console.log("No authorized account found");
                
            }
        }
    };


  return {
    connectHandler,
    accountsChanged,
    chainChanged,
    checkMetaMaskConnection,
    account,
    balance,
    conectado
  };
};