import { useNavigate } from 'react-router-dom';

const SingleEntry = ({ importeDebe, importeHaber, hash, contractEntry }) => {
  const navigate = useNavigate();
  const etherscanLink = 'https://sepolia.etherscan.io/';
  const shortenedContract = `${contractEntry.slice(0, 6)}...${contractEntry.slice(-4)}`;

  const goToContractPage = (contractAddress) => {
    navigate(`/Entry/${contractAddress}`);
  }

  return (
    <tr>
      <td>
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault(); 
            goToContractPage(contractEntry);
          }}
        >
          {shortenedContract}
        </a>
      </td>
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
