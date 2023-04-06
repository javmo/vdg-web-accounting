import React, { useEffect } from 'react';
import { useWeb3 } from '../../hooks/useWeb3';
import styles from '../../assets/styles/WalletConnection.module.css';

const WalletConnection = () => {
  const { connectWallet, account, balance } = useWeb3();

  const handleConnectWallet = async () => {
    await connectWallet();
  };  

  return (
    <div className={styles.walletContainer}>
      <button onClick={handleConnectWallet}>Conectar Wallet</button>
      {account && (
        <div className={styles.walletInfo}>
          <p>Dirección de la wallet: {account}</p>
          <p>Balance: {balance} ETH</p>
        </div>
      )}
    </div>
  );
}

export default WalletConnection;
