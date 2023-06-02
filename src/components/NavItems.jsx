import { FaClipboardList } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faTableColumns } from '@fortawesome/free-solid-svg-icons';



export const navItems = [
    {
      id: 1,
      title: "Cuenta",
      cName: "nav-item",
      icon: <FontAwesomeIcon icon={faWallet} size="2x" style={{ marginRight: '8px' }}/>,
    },
    {
      id: 2,
      title: "Asientos",
      cName: "nav-item",
      icon: <FontAwesomeIcon icon={faTableColumns} size="2x" style={{ marginRight: '8px' }}/>,
    },

  ];
  
  export const cuentasDropdown = [
    
    {
      id: 1,
      title: "Detalle",
      path: "/Cuenta",
      cName: "submenu-item",
    },
    {
      id: 2,
      title: "Listar",
      path: "./ListaCuentas",
      cName: "submenu-item",
    },
    // {
    //   id: 2,
    //   title: "Configurar",
    //   path: "./ConfigCuenta",
    //   cName: "submenu-item",
    // },
    // {
    //   id: 4,
    //   title: "Cuenta",
    //   path: "./Cuenta",
    //   cName: "submenu-item",
    // },
    
   
  ];

  export const asientosDropdown = [
    
    {
      id: 1,
      title: "Alta",
      path: "./NuevoAsiento",
      cName: "submenu-item",
    },
    {
      id: 2,
      title: "Configurar",
      path: "./ConfigAsiento",
      cName: "submenu-item",
    },
    {
      id: 3,
      title: "Listar",
      path: "./ListaAsientos",
      cName: "submenu-item",
    },
    {
      id: '4', 
      title: 'Movimientos contables por cuenta',
      path: '/ContabilidadCuenta',
      cName: 'nav-text' 
    },
    {
      id: '5', 
      title: 'Movimientos Contables',
      path: '/ContabilidadGeneral',
      cName: 'nav-text' 
    }
   
  ];