import React from 'react';
import SingleEntry  from './SingleEntry';

export default {
  title: 'Components/SingleEntry', 
  component: SingleEntry,         
};

const Template = (args) => <SingleEntry {...args} />;

export const DefaultSingleEntry = Template.bind({});
DefaultSingleEntry.args = {
  importeDebe: '100',
  importeHaber: '',
  hash: '0x331d494a6574368c71bc4bb933aa89c88c8adbbbdd0712cd457684d9ae5fd00b', 
  contractAddress: '0x1122AABBCCDDEE3344556677889900AABBCC0011',
};

