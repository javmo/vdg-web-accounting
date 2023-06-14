import React, { useState, useEffect } from 'react';
import AccountEntrys from '../../components/AccountEntrys';
import useAccounts from '../../hooks/CuentaHooks';
import useEntryApi from '../../hooks/useEntryApi';

const ContabilidadCuenta = (props) => {

  const { getAccountByAddress, name, balance, type, selectAccount, contract, isLoadingEntry, error } = useAccounts();
  const { getEntries, entries } = useEntryApi();

  const [records, setRecords] = useState([]);

  useEffect(() => {
    const handleGetAccountAndEntries = async () => {
      await getAccountByAddress(props.wallet);
      await getEntries();
    };
    
    handleGetAccountAndEntries();
  }, [props.wallet]);

  useEffect(() => {
    // Cuando se tenga la cuenta y las entradas, procesa las entradas
    if(!isLoadingEntry && entries) {
      const processedEntries = entries.reduce((acc, entry) => {
        
        let record = {
          importeDebe: '',
          importeHaber: '',
          hash: entry.hash,
          contractAddress: entry.contract
        };
  
        if(entry.debitAccountContract === contract) {
          record.importeDebe = entry.amount;
        }
  
        if(entry.creditAccountContract === contract) {
          record.importeHaber = entry.amount;
        }
  
        // Si importeDebe o importeHaber se establecieron, guardar el registro.
        if(record.importeDebe || record.importeHaber) {
          acc.push(record);
        }
  
        return acc;
      }, []);
  
      setRecords(processedEntries);
    }
  }, [isLoadingEntry, entries, contract]);

  if(isLoadingEntry) {
     return <div>Cargando...</div>;
   }

  if(error) {
    return <div>Error al cargar la cuenta: {error.message}</div>;
  }

  return (
    <div>
      <AccountEntrys 
        cuenta={contract}
        nombreCuenta={name}
        singleEntries={records}
        type={type}
      />
    </div>
  );
};

export default ContabilidadCuenta;
