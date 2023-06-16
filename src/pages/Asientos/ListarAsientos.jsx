import React, { useEffect, useState } from 'react';
import useAsientos from '../../hooks/AsientoHooks';
import './ListaAsientos.css'
import DataTable from 'react-data-table-component';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Toaster, toast } from 'react-hot-toast';
import * as Icons from "react-icons/fa";
import { Link } from 'react-router-dom';

const ListaAsientos =() => {
  
  const etherscanLink = 'https://sepolia.etherscan.io/address/';
  const swaggerPost= 'http://localhost:4000/api-docs/#/entry/post_api_entry__configurationContract_'
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
      selector: row => row.debitAccountContract === "0x0000000000000000000000000000000000000000" ? "-" : (
        <div className='div-colum-address'>
          <Link to={`${etherscanLink}${row.debitAccountContract}`} data-tip={row.debitAccountContract}>{`${row.debitAccountContract.slice(0, 4)}...${row.debitAccountContract.slice(-4)}`}</Link>
          <CopyToClipboard text={row.debitAccountContract}>
                <button  className='btn-copy' title={row.debitAccountContract} onClick={() => toast("Cuenta debito copiada", {position: 'botton-right'})}>
                  <Icons.FaRegCopy /> 
                </button>
            </CopyToClipboard>
        </div>
      ),
      sortable:true,
      // width:"15%"
    },
    {
      name:"Cuenta credito",
      selector: row => row.creditAccountContract === "0x0000000000000000000000000000000000000000" ? "-" : (
        <div className='div-colum-address'>
          <Link to={`${etherscanLink}${row.creditAccountContract}`} data-tip={row.creditAccountContract}>{`${row.creditAccountContract.slice(0, 4)}...${row.creditAccountContract.slice(-4)}`}</Link>
          <CopyToClipboard text={row.creditAccountContract}>
                <button  className='btn-copy' title={row.creditAccountContract} onClick={() => toast("Cuenta credito copiada", {position: 'botton-right'})}>
                  <Icons.FaRegCopy /> 
                </button>
            </CopyToClipboard>
        </div>
      ),
      sortable:true,
      //width:"15%"
    },
    {
      name:"Contrato",
      selector: row => (
        <div className='div-colum-address'>
          <Link to={`${etherscanLink}${row.contract}`} data-tip={row.contract}>{`${row.contract.slice(0, 4)}...${row.contract.slice(-4)}`}</Link>
          <CopyToClipboard text={row.contract}>
                <button  className='btn-copy' title={row.contract} onClick={() => toast("Contrato copiado", {position: 'botton-right'})}>
                  <Icons.FaRegCopy /> 
                </button>
            </CopyToClipboard>
        </div>
      ),
      sortable:true,
      //width:"10%"
      
    },
    {
      name:"URL",
      selector: row =>  (
        <div className='div-colum-address'>
          {/* <Link to={`${swaggerPost}`}>Swagger</Link> */}
          <a>Post URL</a>
          <CopyToClipboard text={`${process.env.REACT_APP_API_URL}/api/entry/${row.contract}`}>
                <button  className='btn-copy' title={`${process.env.REACT_APP_API_URL}/api/entry/${row.contract}`} onClick={() => toast("Post copiado", {position: 'botton-right'})}>
                  <Icons.FaRegCopy /> 
                </button>
          </CopyToClipboard>
        </div>
      ),
      sortable:true,
      //width:"45%"
      
    },

    {
      name:"Doc",
      selector: row =>  (
        <div className='div-colum-address'>
          <Link to={`${swaggerPost}`}>Swagger</Link>
          {/* <CopyToClipboard text={`${process.env.REACT_APP_API_URL}/api/entry/${row.contract}`}>
                <button  className='btn-copy' title={`${process.env.REACT_APP_API_URL}/api/entry/${row.contract}`} onClick={() => toast("Post copiado", {position: 'botton-right'})}>
                  <Icons.FaRegCopy /> 
                </button>
            </CopyToClipboard> */}
        </div>
      ),
      sortable:true,
      //width:"45%"
      
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
