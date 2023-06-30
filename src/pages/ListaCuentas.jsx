import React, { useEffect } from 'react';
import useAccounts from '../hooks/CuentaHooks';
import './ListaCuentas.css'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Toaster, toast } from 'react-hot-toast';
import * as Icons from "react-icons/fa";


const ListaCuentas =() => {
  
  const etherscanLink = 'https://sepolia.etherscan.io/address/';
  const { accounts, isLoading, error, fetchData } = useAccounts();

  useEffect(() => {
    fetchData();
  }, []);
  
  if (isLoading) {
    return <p>Cargando...</p>;
  }
  if (error) {
    return <p>Error al cargar las cuentas: {error.message}</p>;
  }

  const columns = [
    {
      name:"Nombre",
      selector: row => row.name,
      sortable:true,
      width:"25%"
    },
    {
      name:"Tipo",
      selector: row => row.type,
      sortable:true,
      width:"10%"
    },
    {
      name:"Balance",
      selector: row => row.balance,
      sortable:true,
      width:"10%"
    },
    {
      name:"Cuenta",
      selector: row => (
        <div className='div-colum-address'>
          <Link to={`${etherscanLink}${row.account}`} data-tip={row.account}>{`${row.account.slice(0, 4)}...${row.account.slice(-4)}`}</Link>
          <CopyToClipboard text={row.account}>
                <button  className='btn-copy' title={row.account} onClick={() => toast("Cuenta copiada", {position: 'botton-right'})}>
                  <Icons.FaRegCopy /> 
                </button>
            </CopyToClipboard>
        </div>
      ),
      sortable:true,
      //width:"30%"
      
    },
    {
      name:"Contrato",
      selector: row =>(
        <div className='div-colum-address'>
        <Link to={`${etherscanLink}${row.contract}`} data-tip={row.contract}>{`${row.contract.slice(0, 4)}...${row.contract.slice(-4)}`}</Link>
        <CopyToClipboard text={row.contract}>
              <button  className='btn-copy' title={row.contract} onClick={() => toast("Contracto copiado", {position: 'botton-right'})}>
                <Icons.FaRegCopy /> 
              </button>
          </CopyToClipboard>
      </div>
      ), 
      sortable:true,
      //width:"30%"
      
    }
  ];
  
  const data = accounts
  
  return(
    <div className='container-table'>
      
      <h5>Listado de cuentas configuradas</h5>

      <DataTable className='dataTable'
          columns={columns}
          data={data}
          pagination
          highlightOnHover
          responsive
      ></DataTable>
    </div>
  )
  
};

export default ListaCuentas;
