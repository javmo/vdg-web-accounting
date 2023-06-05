import React from 'react';
import SingleEntry from './SingleEntry';
import { Table } from 'react-bootstrap';

const AccountEntrys = ({ cuenta, type, nombreCuenta, singleEntries, contract }) => {
  const etherscanLink = 'https://sepolia.etherscan.io/';
  const totalDebe = singleEntries.reduce((total, entry) => total + Number(entry.importeDebe || 0), 0);
  const totalHaber = singleEntries.reduce((total, entry) => total + Number(entry.importeHaber || 0), 0);

  let total = '';
  if(type === "ASSET") {
    total = totalDebe - totalHaber;
  } else {
    total = totalHaber - totalDebe;
  };
  

  return (
    <div className="accountEntrys">
      <h2>Información de la cuenta</h2>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Número de Cuenta</th>
            <th>Nombre de Cuenta</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href={etherscanLink + 'address/' + cuenta} target="_blank" rel="noopener noreferrer">
                {cuenta}
              </a>
            </td>
            <td>{nombreCuenta}</td>
          </tr>
        </tbody>
      </Table>

      <h2>Movimientos</h2>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Contract Entry</th>
            <th>Hash</th>
            <th>Debe</th>
            <th>Haber</th>
          </tr>
        </thead>
        <tbody>
          {singleEntries.map((singleEntry, index) => (
            <SingleEntry
              key={index}
              importeDebe={singleEntry.importeDebe}
              importeHaber={singleEntry.importeHaber}
              hash={singleEntry.hash}
              contractEntry={singleEntry.contractAddress}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>Sub-Total:</td>
            <td>{totalDebe}</td>
            <td>{totalHaber}</td>
          </tr>
          <tr>
            <td colSpan="3">Total cuenta: {total}</td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};

export default AccountEntrys;