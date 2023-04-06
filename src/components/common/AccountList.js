import React from 'react';
import useAccounts from '../../hooks/useAccountsApi';
import styles from '../../assets/styles/AccountList.module.css'
import {
  Container,
  Title,
  Table,
  TableHeader,
  TableRow,
  TableCell,
} from '../../assets/styles/AccountListStyles';

const AccountList = () => {
  const { accounts, isLoading, error } = useAccounts();

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar las cuentas: {error.message}</p>;
  }

  return (
    <Container>
      <Title>Cuentas</Title>
      {accounts.length === 0 ? (
        <p>No hay cuentas disponibles</p>
      ) : (
        <Table>
          <thead>
            <tr>
              <TableHeader>Nombre</TableHeader>
              <TableHeader>Tipo</TableHeader>
              <TableHeader>Balance</TableHeader>
              <TableHeader>Descripción</TableHeader>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <TableRow key={account.name}>
                <TableCell>{account.name}</TableCell>
                <TableCell>{account.accountType}</TableCell>
                <TableCell>{account.balance}</TableCell>
                <TableCell>{account.description}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default AccountList;
