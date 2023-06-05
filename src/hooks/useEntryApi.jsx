import { useState, useEffect } from 'react';
import axios from 'axios';

const useEntryApi = () => {
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  

   const getEntries = async () => {
       setIsLoading(true);
       try {
         const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/entry`);
         setEntries(response.data);
         console.log(response.data)
       } catch (error) {
         setError(error);
       }
       setIsLoading(false);
     };

     const getEntry = async (contract) => {
        setIsLoading(true);
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/entry/contract/${contract}`);
          setEntry(response.data);
          return(response.data);
        } catch (error) {
          setError(error);
        }
        setIsLoading(false);
      };
    

  return { 
    entries,
    isLoading,
    error, 
    entry,
    getEntry,
    getEntries};
};

export default useEntryApi;
