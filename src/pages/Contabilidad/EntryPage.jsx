import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Entry from '../../components/Entry';
import useAccounts from '../../hooks/CuentaHooks';
import useEntryApi from '../../hooks/useEntryApi';

const ContabilidadGeneral = (props) => {
    const { getAccountByContract, name, balance, type, selectAccount, contract, isLoading, error } = useAccounts();
    const { getEntry, entry } = useEntryApi();

    const [cuentaDebito, setCuentaDebito] = useState([]);
    const [cuentaCredito, setCuentaCredito] = useState([]);
    const { contractAddress } = useParams();


    useEffect(() => {
    
        handleGetAccountAndEntry();
    }, [contractAddress]);


    const handleGetAccountAndEntry = async () => {
        const entryResult = await getEntry(contractAddress);
        console.log("Entry Result:", entry);
        if (entryResult) {
            console.log("Debit Account Contract:", entryResult.debitAccountContract);
            console.log("Credit Account Contract:", entryResult.creditAccountContract);
    
            const debitAccount = await getAccountByContract(entryResult.debitAccountContract);
            const creditAccount = await getAccountByContract(entryResult.creditAccountContract);
    
            console.log("Debit Account:", debitAccount);
            console.log("Credit Account:", creditAccount);
    
            setCuentaDebito(debitAccount ? debitAccount.name : '');
            setCuentaCredito(creditAccount ? creditAccount.name : '');
        }
    };
    
    

    return (
        <div className="asiento-contable">
            <h1 className="contabilidad-general-title">Asiento Contable</h1>
            {entry && entry.debitAccountContract && entry.creditAccountContract &&
                <Entry
                    //key={index}
                    cuentaDebito={entry.debitAccountContract}
                    nombreCuentaDebito={cuentaDebito}
                    cuentaCredito={entry.creditAccountContract}
                    nombreCuentaCredito={cuentaCredito}
                    importe={entry.amount}
                    hash={entry.hash}
                    contractAddress={entry.contract}
                />
            }
        </div>
    );
};

export default ContabilidadGeneral;