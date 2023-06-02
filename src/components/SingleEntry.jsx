import React from 'react';
import { Table } from 'react-bootstrap';

const SingleEntry = ({ importeDebe, importeHaber, hash }) => {
    const etherscanLink = 'https://sepolia.etherscan.io/';

    return (
        <tr>
            <td>
              <a href={etherscanLink + 'tx/' + hash} target="_blank" rel="noopener noreferrer">
                {hash}
              </a>
            </td>
            <td>{importeDebe}</td>
            <td>{importeHaber}</td>
        </tr>
    );
};

export default SingleEntry;
