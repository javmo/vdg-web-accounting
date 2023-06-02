import React from 'react';
import  Entry  from './Entry';

export default {
  title: 'Components/Entry', 
  component: Entry,         
};

const Template = (args) => <Entry {...args} />;

export const DefaultEntry = Template.bind({});
DefaultEntry.args = {
  cuentaDebito: '0xAaBbCcDdEeFf0011223344556677889900aabbcc',
  nombreCuentaDebito: 'Cuenta de Debito',
  cuentaCredito: '0x1122AABBCCDDEE3344556677889900AABBCC0011',
  nombreCuentaCredito: 'Cuenta de Credito',
  importe: '100',
  hash: '0x331d494a6574368c71bc4bb933aa89c88c8adbbbdd0712cd457684d9ae5fd00b', 
  contractAddress: '0x1122AABBCCDDEE3344556677889900AABBCC0011',
};

