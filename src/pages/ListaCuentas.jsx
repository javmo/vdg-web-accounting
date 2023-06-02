import React, { useEffect } from 'react';
import useAccounts from '../hooks/CuentaHooks';
import './ListaCuentas.css'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';


const ListaCuentas =() => {
  
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
      selector: row => `${row.account.slice(0, 4)}...${row.account.slice(-4)}`, 
      sortable:true,
      //width:"30%"
      
    },
    {
      name:"Contrato",
      selector: row => `${row.contract.slice(0, 4)}...${row.contract.slice(-4)}`,  
      sortable:true,
      //width:"30%"
      
    }
  ];
  
  const data = accounts
  
  return(
    <div className='container-table'>
      
      <h5>Listado de cuenta configuradas</h5>

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
