import { useState, useEffect } from 'react';
import axios from 'axios';

const useAccountsApi = () => {
  const [accounts, setAccounts] = useState([]);
  const [name, setName] = useState();
  const [balance, setBalance] = useState();
  const [type, setType] = useState();
  const [selectAccount, setAccount] = useState();
  const [contract, setContract] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  

   const fetchData = async () => {
       setIsLoading(true);
       try {
         const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/account`);
         setAccounts(response.data);
         console.log(response.data)
       } catch (error) {
         setError(error);
       }
       setIsLoading(false);
     };
    

  const addAssetAccount = async ({ name, owner }) => {
    console.log("name " + name + " owner: " + owner)
    setIsLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/account/addAssetAccount`, { name, owner });
      setIsLoading(false);
      return response.data; // Devuelve la información de la transacción
    } catch (error) {
      setError(error);
      setIsLoading(false);
      throw error;
    }
  };

  const addLiabilityAccount = async ({ name, owner }) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/account/addLiabilityAccount`, { name, owner });
      setIsLoading(false);
      return response.data; // Devuelve la información de la transacción
    } catch (error) {
      setError(error);
      setIsLoading(false);
      throw error;
    }
  };

  const addResultAccount = async ({ name, owner, isExpense }) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/account/addResultAccount`, { name, owner, isExpense });
      setIsLoading(false);
      //console.log("response.data: " + response.data)
      return response.data; // Devuelve la información de la transacción
    } catch (error) {
      console.log("response.error: " + error);
      setError(error);
      setIsLoading(false);
      throw error;
    }
  };

  const getAccountByAddress = async (address) => {
    setIsLoading(true);
    console.log("address hooks: " + address)
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/account/address/${address}`);
      const { name, balance, type, account, contract } = response.data;
      console.log("name hook: " + name)
      setName(name);
      setBalance(balance);
      setType(type);
      setAccount(account);
      setContract(contract);
      return response.data;
      console.log("response try:" + response)
    } catch (error) {
      console.log("response error: " + error)
      setName('No existe');
      setError(error);
      setIsLoading(false);
      throw error;
    }
    setIsLoading(false);
  };

  const getAccountByContract = async (contractAddress) => {
    setIsLoading(true);
    console.log("address hooks: " + contractAddress)
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/account/contract/${contractAddress}`);
        const { name, balance, type, account, contract } = response.data;
        console.log("response try:" + response)
        
        // Retorna un objeto con los datos que recuperaste
        return { name, balance, type, account, contract };
    } catch (error) {
        console.log("response error: " + error)
        setError(error);
        setIsLoading(false);
        throw error;
    } finally {
        setIsLoading(false);
    }
};


  return { 
    name,
    balance,
    type,
    selectAccount,
    contract, 
    accounts, 
    isLoading, 
    error, 
    addAssetAccount, 
    addLiabilityAccount, 
    addResultAccount, 
    getAccountByAddress, 
    getAccountByContract,
    fetchData};
};

export default useAccountsApi;
