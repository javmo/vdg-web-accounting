import React, { useState } from 'react';
import useAccounts from '../hooks/CuentaHooks';
import './ListaCuentas.css'
import DataTable from 'react-data-table-component';


const ListaCuentas =() => {
  
  const { accounts, isLoading, error } = useAccounts();
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
      width:"20%"
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
      selector: row => row.account,
      sortable:true,
      width:"25%"
      
    },
    {
      name:"Contrato",
      selector: row => row.contract,
      sortable:true,
      width:"25%"
      
    }
  ];
  
  const data = accounts
  
  return(
    <div className='container-table'>

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
