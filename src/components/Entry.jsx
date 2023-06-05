import React from 'react';
import { Table } from 'react-bootstrap';


const Entry = ({ cuentaDebito, nombreCuentaDebito, cuentaCredito, nombreCuentaCredito, importe, hash, contractAddress }) => {
    const etherscanLink = 'https://sepolia.etherscan.io/';
    const shortenedDebito = `${cuentaDebito.slice(0, 6)}...${cuentaDebito.slice(-4)}`;
    const shortenedCredito = `${cuentaCredito.slice(0, 6)}...${cuentaCredito.slice(-4)}`;
    const shortenedHash = `${hash.slice(0, 6)}...${hash.slice(-4)}`;
    const shorteneContract = `${contractAddress.slice(0, 6)}...${contractAddress.slice(-4)}`;

    return (
        <Table striped bordered hover className="entry">
            <thead>
                <tr>
                    <th>Número de Cuenta</th>
                    <th>Nombre de Cuenta</th>
                    <th>Debe</th>
                    <th>Haber</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href={etherscanLink + 'address/' + cuentaDebito} target="_blank" rel="noopener noreferrer">{shortenedDebito}</a></td>
                    <td>{nombreCuentaDebito}</td>
                    <td>{importe}</td>
                    <td></td>
                </tr>
                <tr>
                    <td><a href={etherscanLink + 'address/' + cuentaCredito} target="_blank" rel="noopener noreferrer">{shortenedCredito}</a></td>
                    <td>{nombreCuentaCredito}</td>
                    <td></td>
                    <td>{importe}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="4">Hash: <a href={etherscanLink + 'tx/' + hash} target="_blank" rel="noopener noreferrer" className="highlighted">{hash}</a></td>
                </tr>
                <tr>
                    <td colSpan="4">ContractAddress: <a href={etherscanLink + 'address/' + contractAddress} target="_blank" rel="noopener noreferrer">{shorteneContract}</a></td>
                </tr>
            </tfoot>
        </Table>
    );
};

export default Entry;
