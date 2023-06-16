import { useState, useEffect } from 'react';
import axios from 'axios';

const useEntryApi = () => {
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState([]);
  const [isLoadingEntry, setIsLoadingEntry] = useState(false);
  const [error, setError] = useState(null);
  

   const getEntries = async () => {
    setIsLoadingEntry(true);
       try {
         const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/entry`);
         setEntries(response.data);
         console.log(response.data)
       } catch (error) {
         setError(error);
       }
       setIsLoadingEntry(false);
     };

     const getEntry = async (contract) => {
      setIsLoadingEntry(true);
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/entry/contract/${contract}`);
          setEntry(response.data);
          return(response.data);
        } catch (error) {
          setError(error);
        }
        setIsLoadingEntry(false);
      };
    

  return { 
    entries,
    isLoadingEntry,
    error, 
    entry,
    getEntry,
    getEntries};
};

export default useEntryApi;
