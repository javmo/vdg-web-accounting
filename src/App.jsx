import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import BuscarCuenta from './pages/BuscarCuenta';
import ListaCuentas from './pages/ListaCuentas';
import ConfigCuenta from './pages/ConfigCuenta';
import Cuenta from './pages/Cuenta';
import WalletConnection from './wallet/WalletConnection'
import NuevoAsiento from './pages/Asientos/AltaAsiento'
import ConfigAsiento from './pages/Asientos/ConfigAsiento'
import ListaAsientos from './pages/Asientos/ListarAsientos'
import Inicio from './pages/Inicio'


const App = () => {
  
  const [wallet, setWallet] = useState('');
  const navigate = useNavigate();
  // Función para actualizar la wallet
  const handleWalletChange = (newWallet) => {
    setWallet(newWallet);
    navigate('/');
  };

  return (
    <div className="App">
      <div className='walletContainer'>
        <WalletConnection  onWalletChange={handleWalletChange}/>

      </div>
       <Navbar/>
       
      <Routes>
        <Route path='/Cuenta' element={<Cuenta wallet={wallet}/>} ></Route>
        <Route path='/BuscarCuenta' element={<BuscarCuenta wallet={wallet}/>} ></Route>
        <Route path='/ListaCuentas' element={<ListaCuentas/>} ></Route>
        <Route path='/ConfigCuenta' element={<ConfigCuenta wallet={wallet}/> } ></Route>
        <Route path='/NuevoAsiento' element={<NuevoAsiento wallet={wallet}/> } ></Route>
        <Route path='/ConfigAsiento' element={<ConfigAsiento wallet={wallet}/> } ></Route>
        <Route path='/ListaAsientos' element={<ListaAsientos/> } ></Route>
        ListaAsientos
        <Route path='/' element={<Inicio/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
