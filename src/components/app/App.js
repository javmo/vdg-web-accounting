import './App.css';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import { BrowserRouter } from 'react-router-dom';

import WalletConnection from '../wallet/WalletConnection';
import Navigation from '../common/Navigation';
import AppRoutes from '../../Routes';

function getLibrary(provider) {
  const library = new Web3(provider);
  library.pollingIntervall = 12000;
  return library;
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

/// comentario de prueba en develop matias
