import React, { useEffect } from 'react';
import useAsientos from '../../hooks/AsientoHooks';
import './ListaAsientos.css'
import DataTable from 'react-data-table-component';


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
    //  width:"25%"
    },
    {
      name:"Cuenta debito",
      selector: row => row.debitAccountContract,
      sortable:true,
    //   width:"25%"
    },
    {
      name:"Cuenta credito",
      selector: row => row.creditAccountContract,
      sortable:true,
    //  width:"25%"
    },
    {
      name:"Contrato",
      selector: row => row.contract,
      sortable:true,
    //  width:"25%"
      
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
