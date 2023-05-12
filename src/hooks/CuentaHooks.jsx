import { useState, useEffect } from 'react';
import axios from 'axios';

const useAccountsApi = () => {
  const [accounts, setAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
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

    fetchData();
  }, []);

  const addAccount = async ({ name, owner }) => {
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

  return { accounts, isLoading, error, addAccount, getAccountByName };
};

export default useAccountsApi;
