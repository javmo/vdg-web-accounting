import { useState, useEffect } from 'react';
import axios from 'axios';

const useAsientosApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [asientos, setAsientos] = useState();
    
  const addNewAsiento = async ({ description, owner }) => {
    console.log("description " + description + " owner: " + owner)
    setIsLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/configuration`, { description, owner });
      setIsLoading(false);
      return response.data; // Devuelve la información de la transacción
    } catch (error) {
      setError(error);
      setIsLoading(false);
      throw error;
    }
  };

  const addConfigAsiento = async ({ configurationContract, accountContract, isCredit, owner }) => {
    console.log("configurationContract " + configurationContract + " isCredit: " + isCredit)
    setIsLoading(true);
    try {
      const response = await axios.patch(`${process.env.REACT_APP_API_URL}/api/configuration`, { configurationContract, accountContract, isCredit, owner });
      setIsLoading(false);
      return response.data; // Devuelve la información de la transacción
    } catch (error) {
      setError(error);
      setIsLoading(false);
      throw error;
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/configuration`);
      setAsientos(response.data);
      console.log(response.data)
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  return { 
    isLoading, 
    error, 
    asientos,
    addNewAsiento, 
    addConfigAsiento,
    fetchData,
  };
};

export default useAsientosApi;
