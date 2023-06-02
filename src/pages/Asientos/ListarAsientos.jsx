import React, { useEffect, useState } from 'react';
import useAsientos from '../../hooks/AsientoHooks';
import './ListaAsientos.css'
import DataTable from 'react-data-table-component';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Toaster, toast } from 'react-hot-toast';
import * as Icons from "react-icons/fa";

const ListaAsientos =() => {
  
  const { asientos, isLoading, error, fetchData } = useAsientos();

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
      name:"Descripcion",
      selector: row => row.description,
      sortable:true,
      width:"25%"
    },
    {
      name:"Cuenta debito",
      selector: row => row.debitAccountContract === "0x0000000000000000000000000000000000000000" ? "-" : `${row.debitAccountContract.slice(0, 4)}...${row.debitAccountContract.slice(-4)}`,
      sortable:true,
      width:"10%"
    },
    {
      name:"Cuenta credito",
      selector: row => row.creditAccountContract === "0x0000000000000000000000000000000000000000" ? "-" : `${row.creditAccountContract.slice(0, 4)}...${row.creditAccountContract.slice(-4)}`,
      sortable:true,
      width:"10%"
    },
    {
      name:"Contrato",
      selector: row => `${row.contract.slice(0, 4)}...${row.contract.slice(-4)}`, 
      sortable:true,
      width:"10%"
      
    },
    {
      name:"Link asiento",
      selector: row =>  (
          <div className='lista-asientos'>   
            <a>/api/entry/${row.contract}</a>
            <CopyToClipboard text={`/api/entry/${row.contract}`}>
            <button
              className='btn-copy-lista'
              title='Copy'
              onClick={() => {
                toast("Address copiada", { position: 'bottom-right' });
              }}
            >
               <Icons.FaRegCopy /> 
            </button>
          </CopyToClipboard>
        </div>
      ),
      sortable:true,
      width:"45%"
      
    },
  ];
  
  const data = asientos
  
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

export default ListaAsientos;
