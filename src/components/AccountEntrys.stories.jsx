import React from 'react';
import AccountEntrys from './AccountEntrys';

export default {
  title: 'Components/AccountEntrys',
  component: AccountEntrys,
};

const Template = (args) => <AccountEntrys {...args} />;

export const DefaultAccountEntrys = Template.bind({});
DefaultAccountEntrys.args = {
    cuenta: '0xAaBbCcDdEeFf0011223344556677889900aabbcc',
    nombreCuenta: 'Prestamos a corto plazo',
    singleEntries: [
    {
        importeDebe: '100',
        importeHaber: '',
        hash: '0x331d494a6574368c71bc4bb933aa89c88c8adbbbdd0712cd457684d9ae5fd00b', 
        contractAddress: '0x1122AABBCCDDEE3344556677889900AABBCC0011',
    },
    {
        importeDebe: '100',
        importeHaber: '',
        hash: '0x331d494a6574368c71bc4bb933aa89c88c8adbbbdd0712cd457684d9ae5fd00b', 
        contractAddress: '0x1122AABBCCDDEE3344556677889900AABBCC0011',
    },
    {
        importeDebe: '',
        importeHaber: '100',
        hash: '0x331d494a6574368c71bc4bb933aa89c88c8adbbbdd0712cd457684d9ae5fd00b', 
        contractAddress: '0x1122AABBCCDDEE3344556677889900AABBCC0011',
    },
    {
        importeDebe: '100',
        importeHaber: '',
        hash: '0x331d494a6574368c71bc4bb933aa89c88c8adbbbdd0712cd457684d9ae5fd00b', 
        contractAddress: '0x1122AABBCCDDEE3344556677889900AABBCC0011',
    },
  ],
};