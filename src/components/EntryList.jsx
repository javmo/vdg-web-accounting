import React from 'react';
import Entry from './Entry';

const EntryList = ({ entries }) => {
    return (
        <div className="entryList">
            {entries.map((entry, index) => (
                <Entry
                    key={index}
                    cuentaDebito={entry.cuentaDebito}
                    nombreCuentaDebito={entry.nombreCuentaDebito}
                    cuentaCredito={entry.cuentaCredito}
                    nombreCuentaCredito={entry.nombreCuentaCredito}
                    importe={entry.importe}
                    hash={entry.hash}
                    contractAddress={entry.contractAddress}
                />
            ))}
        </div>
    );
};

export default EntryList;
