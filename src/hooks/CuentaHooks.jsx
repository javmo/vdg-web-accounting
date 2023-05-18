import { useState, useEffect } from 'react';
import axios from 'axios';

const useAccountsApi = () => {
  const [accounts, setAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     //setIsLoading(true);
  //     try {
  //       const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/account`);
  //       setAccounts(response.data);
  //       console.log(response.data)
  //     } catch (error) {
  //       setError(error);
  //     }
  //     //setIsLoading(false);
  //   };

  //   fetchData();
  // }, []);

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
    }
  };

  const addResultAccount = async ({ name, owner }) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/account/addResultAccount`, { name, owner });
      setIsLoading(false);
      return response.data; // Devuelve la información de la transacción
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const getAccountByName = async (name) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/account/${name}`);
      return response.data;
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  return { accounts, isLoading, error, addAssetAccount, addLiabilityAccount, addResultAccount, getAccountByName };
};

export default useAccountsApi;
