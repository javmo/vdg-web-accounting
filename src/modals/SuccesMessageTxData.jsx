// SuccesMessageTxData.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import {
  SuccessMessage,
  SuccessIcon,
  TxData,
  customStyles,
} from './SuccesMessageTxDataStyles';

const SuccesMessageTxData = ({ successMessage }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
      if (successMessage) {
        setIsModalOpen(true);
      }
    }, [successMessage]);

    if (!successMessage) {
      return null;
    }
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
  return (
    <Modal isOpen={isModalOpen}
    onRequestClose={handleCloseModal}
    style={customStyles}
    >
      <SuccessMessage className={isModalOpen ? 'show' : ''}>
        <SuccessIcon>&#x2714;</SuccessIcon>
        <div>
          <p>Cuenta creada exitosamente.</p>
          <TxData>
            <strong>Transaction Hash:</strong> {successMessage.tx}
          </TxData>
          <TxData>
            <strong>Block Number:</strong> {successMessage.receipt.blockNumber}
          </TxData>
          <TxData>
            <strong>Gas Used:</strong> {successMessage.receipt.gasUsed}
          </TxData>
          <button onClick={handleCloseModal}>Cerrar</button>
        </div>
      </SuccessMessage>
    </Modal>
  );
};

export default SuccesMessageTxData;