import React from 'react';
import EntryList from '../../components/EntryList';
import './ContabilidadGeneral.css';

const ContabilidadGeneral = (props) => {
    const data = {
        entries: [
                {
                  cuentaDebito: '0xA1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0',
                  nombreCuentaDebito: 'Debit Account',
                  cuentaCredito: '0xZ1Y2X3W4V5U6T7S8R9Q0P1O2N3M4L5K6J7I8H9G',
                  nombreCuentaCredito: 'Credit Account',
                  importe: '100',
                  hash: '0x331d494a6574368c71bc4bb933aa89c88c8adbbbdd0712cd457684d9ae5fd00b',
                  contractAddress: '0x1122AABBCCDDEE3344556677889900AABBCC0011',
                },
                {
                  cuentaDebito: '0xG1H2I3J4K5L6M7N8O9P0Q1R2S3T4U5V6W7X8Y9Z',
                  nombreCuentaDebito: 'Another Debit Account',
                  cuentaCredito: '0xZ9Y8X7W6V5U4T3S2R1Q0P9O8N7M6L5K4J3I2H1',
                  nombreCuentaCredito: 'Another Credit Account',
                  importe: '200',
                  hash: '0x331d494a6574368c71bc4bb933aa89c88c8adbbbdd0712cd457684d9ae5fd00b',
                  contractAddress: '0x1122AABBCCDDEE3344556677889900AABBCC0011',
                },
            ],
    };

    return (
        <div className="contabilidad-general">
            <h1 className="contabilidad-general-title">Contabilidad General</h1>
            <div className="contabilidad-general-table">
                <EntryList 
                    entries={ data.entries }
                />
            </div>
        </div>
    );
};

export default ContabilidadGeneral;