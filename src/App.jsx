import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import BuscarCuenta from './pages/BuscarCuenta';
import ListaCuentas from './pages/ListaCuentas';
import ConfigCuenta from './pages/ConfigCuenta';
import Signup from './pages/Signup';



const App = () => {
  
  return (
    <div className="App">

       <Navbar />
       
      <Routes>
        <Route path='/BuscarCuenta' element={<BuscarCuenta/>} ></Route>
        <Route path='/ListaCuentas' element={<ListaCuentas/>} ></Route>
        <Route path='/ConfigCuenta' element={<ConfigCuenta/> } ></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
